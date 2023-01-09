import styled from "styled-components";

export const StyledLogin = styled.main`
  min-height: 100vh;
  display: flex;
  flex-direction: column-reverse;
  align-items: center;
  justify-content: center;
  padding: 10px 10px 40px 10px;
  background-color: var(--color-blue-2);
  color: var(--color-gray-10);

  section:nth-child(1) {
    & > h2 + div {
      height: 30px;
      display: flex;

      text-align: end;
      & > a {
        font-size: 16px;
        text-decoration: underline;
        color: var(--color-blue-6);
      }
      & > a:hover {
        text-decoration: none;
        color: var(--color-blue-5);
        font-weight: bold;
      }
    }
    @media (min-width: 800px) {
      align-items: flex-start;
    }
  }

  @media (min-width: 800px) {
    flex-direction: row;
    gap: 5vw;
  }

  .img-section-login {
    margin: 20px 0 30px 0;
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 30px;

    .logo-login {
      width: 100%;
      max-width: 300px;
    }
    .workers-img-login {
      max-width: 450px;
    }

    @media (max-width: 800px) {
      .workers-img-login {
        display: none;
      }
    }
  }

  form {
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 415px;
    padding-top: 20px;

    Button {
      height: 60px;
      margin-top: 10px;
    }
    Input {
      width: 100%;
    }
  }
  div {
    width: 100%;
    max-width: 415px;
    margin-top: 20px;
    display: flex;
    flex-direction: column;
    gap: 15px;
    p {
      padding: 0 10px;
      color: var(--color-gray-10);
    }
    a {
      height: 60px;
    }
  }
`;
