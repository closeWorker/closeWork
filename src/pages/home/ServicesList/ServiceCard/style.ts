import styled from "styled-components";

export const StyledCard = styled.li`
  width: 298px;
  max-width: 100%;

  padding: 0 12px 27px 12px;

  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

  border: 1px solid var(--color-blue-3);

  border-bottom: 1px solid var(--color-blue-3);

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  transition: 150ms ease-in-out;

  @media (min-width: 420px) {
    &:hover {
      border: 1px solid var(--color-neutral-black);
      transform: scale(1.1);
    }
  }

  > div {
    border-bottom: 1px solid var(--color-blue-3);

    display: flex;
    flex-direction: column;
    align-items: center;

    padding: 6px 0 15px 0;
  }

  > div:nth-child(4) {
    position: relative;
  }
  > div:nth-child(4) > a {
    width: 33px;

    position: absolute;
    bottom: 19px;
    right: 1px;

    overflow: visible;
  }
  > div:nth-child(4) > a > img {
    width: 100%;
    object-fit: cover;

    transition: 150ms ease-in-out;

    &:hover {
      transform: scale(1.1);
    }
  }

  p {
    word-break: break-word;
    text-align: center;
  }
`;

export const StyledStars = styled.div`
  display: flex;
  align-items: center;
  svg {
    font-size: 20px;
  }
`;
