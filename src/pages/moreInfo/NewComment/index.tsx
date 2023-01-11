import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { Button } from "../../../components/Button";
import { Input } from "../../../components/Input";
import { Textarea } from "../../../components/Textarea";
import { ContainerNewComment, Fieldset } from "./style";
import * as yup from "yup";
import { Title } from "../../../components/Title";
import { useParams } from "react-router-dom";
import { AxiosError } from "axios";
import { iDefaultErrorResponse, iListComments } from "../../../context/type";
import { api } from "../../../services/api";
import { useState } from "react";
import { RotatingLines } from "react-loader-spinner";

export interface iNewComment {
  name: string;
  userId?: number;
  serviceId?: number;
  comment: string;
  service_rating: string | number;
}

export interface iPropsNewComment {
  setListComments: React.Dispatch<React.SetStateAction<iListComments[]>>;
}

export const NewComment = ({ setListComments }: iPropsNewComment) => {
  const [load, setLoad] = useState(false);
  const params = useParams();

  const newCommentSchema = yup.object().shape({
    name: yup.string().required("Nome é obrigatório"),
    comment: yup.string().required("Comentário é obrigatório"),
    service_rating: yup.string().required("Avaliação é obrigatória"),
  });

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<iNewComment>({
    mode: "onBlur",
    resolver: yupResolver(newCommentSchema),
  });

  const requestComments = async () => {
    try {
      const responseComments = await api.get(
        `comments?serviceId=${params.serviceId}`
      );
      setListComments(responseComments.data);
    } catch (error) {
      const currentError = error as AxiosError<iDefaultErrorResponse>;
      console.error(currentError.response?.data);
    }
  };

  const submitNewComment = async (data: iNewComment) => {
    data.serviceId = Number(params.serviceId);
    data.service_rating = Number(data.service_rating);
    data.userId = 1;
    const token = localStorage.getItem("@closework:commentToken");
    if (token) {
      try {
        setLoad(true);
        const response = await api.post(`/comments`, data, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        reset();
        requestComments();
      } catch (error) {
        const currentError = error as AxiosError<iDefaultErrorResponse>;
        console.error(currentError.response?.data);
      } finally {
        setLoad(false);
      }
    }
  };

  return (
    <ContainerNewComment onSubmit={handleSubmit(submitNewComment)}>
      <Input
        type="text"
        id="name"
        labelName="Nome:"
        placeholder="Digite seu nome aqui"
        linkForm={register("name")}
        error={errors.name?.message}
      />
      <Textarea
        id="comment"
        labelName="Comentário:"
        placeholder="Digite seu comentário aqui"
        linkForm={register("comment")}
        error={errors.comment?.message}
      />
      <Fieldset>
        <label>Avaliação:</label>
        <select {...register("service_rating")}>
          <option value="5">5,0</option>
          <option value="4">4,0</option>
          <option value="3">3,0</option>
          <option value="2">2,0</option>
          <option value="1">1,0</option>
        </select>

        <Title type="Body-600" colorTitle="negative">
          {errors.service_rating?.message}
        </Title>
      </Fieldset>
      <Button style="blueDark" type="submit" disabled={load}>
        {load ? (
          <RotatingLines
            strokeColor="white"
            strokeWidth="5"
            animationDuration="0.75"
            width="30"
            visible={true}
          />
        ) : (
          "Enviar Depoimento"
        )}
      </Button>
    </ContainerNewComment>
  );
};
