//Imports

//Components
import Form from './form/Form';

export default function Register() {
  return (
    <section className="px-4 mt-10 flex flex-col justify-center items-center">
      <h2
        style={{ textShadow: '4px 6px 5px gray' }}
        className="text-3xl font-bold"
      >
        Cadastro de Usuário
      </h2>
      <Form />
    </section>
  );
}
