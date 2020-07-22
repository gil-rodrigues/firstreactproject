import React from 'react';
import { FiChevronRight } from 'react-icons/fi';

import { Title, Form, Repositories } from './styles';

import logoImg from '../../assets/logo.svg';

const Repository: React.FC = () => {
    return (
    <>
        <img src={logoImg} alt="GitHub Explorer"></img>
        <Title>Explore Repositórios no Github</Title>
        <Form>
            <input placeholder="Insira o nome de repositório que quer pesquisar"></input>
            <button type="submit">Pesquisar</button>
        </Form>
        <Repositories>
            <a href="teste">
                <img src="https://i.pinimg.com/originals/f4/e2/93/f4e293ba05796c940ab8fbc0bdefe855.jpg" alt="Gil Rodrigues"></img>
                <div>
                    <strong>sldkfjsdlkfj</strong>

                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tem id est laborum.</p>
                </div>

                <FiChevronRight size={20} ></FiChevronRight>
            </a>
        </Repositories>
    </>
    )
};

export default Repository;
