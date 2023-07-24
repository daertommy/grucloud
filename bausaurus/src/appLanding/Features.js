export default function (context) {
  const { bau, css } = context;
  const { div, h4, p } = bau.tags;

  const className = css`
    margin: 0.5rem;
    padding: 0.5rem;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-around;
    & .feature {
      background-color: var(--color-emphasis-50);
      border-radius: 0.5rem;
      margin: 0.5rem;
      padding: 0.5rem;
      width: 30%;
      & p {
        color: var(--font-color-secondary);
      }
    }
    @media (max-width: 640px) {
      flex-direction: column;
      & .feature {
        width: 90%;
      }
    }
  `;

  const Feature = ({ title, Content }) =>
    div({ className: "feature" }, h4(title), p(Content()));

  return function Features({ featuresContent }) {
    return div(
      {
        class: className,
      },
      featuresContent.map(Feature)
    );
  };
}
