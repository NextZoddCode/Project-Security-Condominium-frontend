//Imports
import { z } from 'zod';
import { useForm, useFieldArray } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

export const FormPropsSchema = z.object({
  name: z
    .string()
    .min(2, 'O campo deve possuir no mínimo 2 caracteres')
    .toLowerCase()
    .transform((name) => {
      return name
        .trim()
        .split(' ')
        .map((word) => {
          return word[0].toLocaleUpperCase().concat(word.substring(1));
        })
        .join(' ');
    }),
  owner: z.boolean(),
  email: z
    .string()
    .email('Insira um e-mail válido')
    .endsWith('.com', 'Insira um e-mail válido'),
  document: z.coerce
    .number({
      message: 'O cpf deve conter apenas números, nenhum caractere',
    })
    .refine(
      (number) => number.toString().length >= 11,
      'O cpf deve ter 11 digitos',
    ),
  phone: z.coerce
    .number({
      message: 'O telefone deve conter apenas números, nenhum caractere',
    })
    .refine(
      (number) => number.toString().length >= 11,
      'O telefone deve ter 11 digitos com DDD',
    ),
  birthday: z
    .string({ message: 'Insira uma data de nascimento válida' })
    .refine((data) => {
      const birthday = data.split('');

      const first = birthday.slice(6).join('');

      const second = birthday.slice(2, 6).join('');

      const third = birthday.slice(0, 2).join('');

      const result = first + second + third;

      result.replace('/', '-');

      return result;
    }),
  units: z
    .array(
      z.object({
        unity: z
          .string()
          .min(5, 'A unidade deve conter 5 caracteres')
          .max(5, 'A unidade deve conter 5 caracteres'),
      }),
    )
    .min(1, 'Deve ter no mínimo 1 unidade cadastrada'),
});

export type FormPropsType = z.infer<typeof FormPropsSchema>;

export const useZod = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
  } = useForm<FormPropsType>({
    resolver: zodResolver(FormPropsSchema),
  });

  const { append, remove, fields } = useFieldArray({
    control,
    name: 'units',
  });

  const addUnity = () => {
    append({ unity: '' });
  };

  const removeUnity = (id: number): any => {
    remove(id);
  };

  return {
    register,
    handleSubmit,
    errors,
    fields,
    addUnity,
    removeUnity,
  };
};
