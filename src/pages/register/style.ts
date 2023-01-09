import styled from "styled-components";

export const StyledRegister = styled.main`
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 10px 10px 40px 10px;
    background-color: var(--color-blue-2);

    @media (min-width: 800px){
        flex-direction: row;
        gap: 5vw;
    }

    .img-section{
        margin: 20px 0 30px 0;
        display: flex;
        align-items: center;
        flex-direction: column;
        gap: 30px;
        
        .logo{
            width: 100%;
            max-width: 300px;
        }
        .workers-img{
            max-width: 450px;
        }

        @media (max-width: 800px) {
            .workers-img{
                display: none;
                
            }               
        }
    }
    
    form{
        display: flex;
        flex-direction: column;
        width: 100%;
        max-width: 415px;

        @media (min-width: 800px) {
            padding-top: 10vh;
        }

        Button{
            height: 60px;
            margin-top: 10px;
        }
    }

    div{
        width: 100%;
        max-width: 415px;
        margin-top: 20px;
        display: flex;
        flex-direction: column;
        gap: 15px;
        p{
            padding: 0 10px;
            color: var(--color-gray-10);
        }
        a{
        height: 60px;
        }
        
    }
`