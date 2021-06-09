import styled from "styled-components";

export const StyledNewsLetter = styled.div`
  .modal {
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    width: 100vw;
    background: rgba(0, 0, 0, 0.7);

    .modal-newsletter {
      width: 50vw;
      height: 40vh;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      position: relative;
      padding: 0 2rem;

      h1 {
        text-transform: uppercase;
        letter-spacing: 1.5px;
        position: absolute;
        top: 10%;
      }

      .submit {
        padding: 0.8rem 1.2rem;
        text-transform: uppercase;
        background: #333;
        color: white;
        margin: 0.4rem 0;
        width: 30%;
        font-weight: bolder;
        letter-spacing: 1.5px;
      }

      .close-btn {
        position: absolute;
        top: 0;
        right: 0;
        padding: 1rem;
        font-size: 2rem;
        border: none;
        color: #fff;
        background: #333;

        &:hover {
          color: #06d85f;
        }
      }

      input {
        padding: 0.6rem 1rem;
        width: 80%;
        border-radius: 10%;
        margin: 1rem 0;
        font-size: 1.2rem;
        letter-spacing: 1.5px;
        text-transform: capitalize;
      }
    }
  }
`;
