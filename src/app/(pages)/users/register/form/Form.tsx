'use client';
//Imports
import { FormPropsType, useZod } from './hooks/useZod';

//Components
import DivLabelAndInput from '../components/div-label-and-input';
import { BsTrash } from 'react-icons/bs';
import ErrorMessage from '../components/form-error-message';
import NeuButton from '@/components/ui/NeuButton';

export default function Form() {
  const { register, handleSubmit, errors, fields, addUnity, removeUnity } =
    useZod();

  const createUser = (data: FormPropsType) => {
    console.log(data);
  };

  return (
    <form
      onSubmit={handleSubmit(createUser)}
      className="w-full my-10 flex flex-col gap-6"
    >
      <DivLabelAndInput>
        <label htmlFor="name">Nome</label>
        <input
          type="text"
          {...register('name')}
          placeholder="Digite seu nome..."
        />
        {errors.name && <ErrorMessage>{errors.name.message}</ErrorMessage>}
      </DivLabelAndInput>

      <div className="flex">
        <div className="flex gap-2">
          Propietário?
          <input type="checkbox" {...register('owner')} />
        </div>
      </div>

      <DivLabelAndInput>
        <label htmlFor="email">E-mail</label>
        <input
          type="email"
          {...register('email')}
          placeholder="Digite seu e-mail..."
        />
        {errors.email && <ErrorMessage>{errors.email.message}</ErrorMessage>}
      </DivLabelAndInput>

      <div className="flex gap-4 sm:justify-between">
        <DivLabelAndInput>
          <label htmlFor="document">CPF</label>
          <input
            type="text"
            {...register('document')}
            placeholder="Digite seu cpf..."
          />
          {errors.document && (
            <ErrorMessage>{errors.document.message}</ErrorMessage>
          )}
        </DivLabelAndInput>
        <DivLabelAndInput>
          <label htmlFor="phone">Telefone</label>
          <input
            type="tel"
            {...register('phone')}
            placeholder="Digite seu telefone..."
          />
          {errors.phone && <ErrorMessage>{errors.phone.message}</ErrorMessage>}
        </DivLabelAndInput>
        <div className="hidden sm:flex flex-col gap-1">
          <label htmlFor="birthday">Nascimento</label>
          <input type="date" {...register('birthday')} />
          {errors.birthday && (
            <ErrorMessage>{errors.birthday.message}</ErrorMessage>
          )}
        </div>
      </div>

      <div className="flex flex-col gap-1 sm:hidden">
        <label htmlFor="birthday">Nascimento</label>
        <input type="date" {...register('birthday')} />
        {errors.birthday && (
          <ErrorMessage>{errors.birthday.message}</ErrorMessage>
        )}
      </div>

      <div className="w-full flex flex-col gap-4">
        <label htmlFor="">
          Unidades
          <button
            onClick={addUnity}
            type="button"
            className="ml-10 text-sm text-violet-500"
          >
            Adicionar
          </button>
        </label>

        {errors.units && <ErrorMessage>{errors.units.message}</ErrorMessage>}

        {fields.map((field, index) => (
          <div key={field.id} className="flex flex-col gap-5">
            <div className="flex items-center gap-4">
              <span>Unidade - {index + 1}</span>
              <input
                type="text"
                {...register(`units.${index}.unity`)}
                className="w-20"
              />
              <button type="button" onClick={() => removeUnity(index)}>
                <BsTrash color="red" size={24} />
              </button>
            </div>
            {errors.units?.[index]?.unity && (
              <ErrorMessage>{errors.units[index].unity.message}</ErrorMessage>
            )}
          </div>
        ))}
      </div>
      <NeuButton type="submit">Cadastrar</NeuButton>
    </form>
  );
}
