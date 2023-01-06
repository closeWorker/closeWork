import React from "react";
import { HeaderHome } from "./HeaderHome";
import { ContainerHome, StyledHome } from "./style";
import worker1 from "../../assets/worker-1.svg";
import worker2 from "../../assets/worker-2.svg";
import worker3 from "../../assets/worker-3.svg";
import worker4 from "../../assets/worker-4.svg";
import worker5 from "../../assets/worker-5.svg";
import { Title } from "../../components/Title";
import { Footer } from "../../components/Footer";
import { Button } from "../../components/Button";

export const Home = () => {
  return (
    <>
      <HeaderHome />
      <StyledHome>
        <div>
          <ContainerHome>
            <img src={worker1} alt="" />
            <img src={worker2} alt="" />
            <img src={worker3} alt="" />
            <img src={worker4} alt="" />
            <img src={worker5} alt="" />
          </ContainerHome>
        </div>
        <div>
          <div>
            <Title type="Heading3" colorTitle="blue-1">
              Filtrar por tipo de serviço
            </Title>
            <select>
              <option value="">Serviço</option>
            </select>
          </div>
        </div>
        <ContainerHome>
          <ul>
            <li>
              <div>
                <Title type="Headline" colorTitle="blue-1">
                  Nome do prestador
                </Title>
                <Title type="Body-600" colorTitle="blue-1">
                  Antonio Santos
                </Title>
              </div>
              <div>
                <Title type="Headline" colorTitle="blue-1">
                  Nome do prestador
                </Title>
                <Title type="Body-600" colorTitle="blue-1">
                  Antonio Santos
                </Title>
              </div>
              <div>
                <Title type="Headline" colorTitle="blue-1">
                  Nome do prestador
                </Title>
                <Title type="Body-600" colorTitle="blue-1">
                  Antonio Santos
                </Title>
              </div>
              <Button name="Ver mais" type="button" style="blueDark" />
            </li>
            <li>
              <div>
                <Title type="Headline" colorTitle="blue-1">
                  Nome do prestador
                </Title>
                <Title type="Body-600" colorTitle="blue-1">
                  Antonio Santos
                </Title>
              </div>
              <div>
                <Title type="Headline" colorTitle="blue-1">
                  Nome do prestador
                </Title>
                <Title type="Body-600" colorTitle="blue-1">
                  Antonio Santos
                </Title>
              </div>
              <div>
                <Title type="Headline" colorTitle="blue-1">
                  Nome do prestador
                </Title>
                <Title type="Body-600" colorTitle="blue-1">
                  Antonio Santos
                </Title>
              </div>
              <Button name="Ver mais" type="button" style="blueDark" />
            </li>
            <li>
              <div>
                <Title type="Headline" colorTitle="blue-1">
                  Nome do prestador
                </Title>
                <Title type="Body-600" colorTitle="blue-1">
                  Antonio Santos
                </Title>
              </div>
              <div>
                <Title type="Headline" colorTitle="blue-1">
                  Nome do prestador
                </Title>
                <Title type="Body-600" colorTitle="blue-1">
                  Antonio Santos
                </Title>
              </div>
              <div>
                <Title type="Headline" colorTitle="blue-1">
                  Nome do prestador
                </Title>
                <Title type="Body-600" colorTitle="blue-1">
                  Antonio Santos
                </Title>
              </div>
              <Button name="Ver mais" type="button" style="blueDark" />
            </li>
            <li>
              <div>
                <Title type="Headline" colorTitle="blue-1">
                  Nome do prestador
                </Title>
                <Title type="Body-600" colorTitle="blue-1">
                  Antonio Santos
                </Title>
              </div>
              <div>
                <Title type="Headline" colorTitle="blue-1">
                  Nome do prestador
                </Title>
                <Title type="Body-600" colorTitle="blue-1">
                  Antonio Santos
                </Title>
              </div>
              <div>
                <Title type="Headline" colorTitle="blue-1">
                  Nome do prestador
                </Title>
                <Title type="Body-600" colorTitle="blue-1">
                  Antonio Santos
                </Title>
              </div>
              <Button name="Ver mais" type="button" style="blueDark" />
            </li>
          </ul>
        </ContainerHome>
      </StyledHome>
      <Footer />
    </>
  );
};
