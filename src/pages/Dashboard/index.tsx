import React, { useState, FormEvent } from 'react';
import { FiChevronRight } from 'react-icons/fi';

import api from '../../services/api';

import { Title, Form, Repositories } from './styles';

import logoImg from '../../assets/logo.svg';

interface Repository {
    full_name: string;
    description: string;
    owner: {
        login: string;
        avatar_url: string;
    }
}

const Repository: React.FC = () => {
    const [repoToSearch, setRepoToSearch] = useState('');
    const [repositories, setRepositories] = useState<Repository[]>([]);

    async function doAddRepository(event: FormEvent<HTMLFormElement>):Promise<void> {
        event.preventDefault();
        const response = await api.get<Repository>(`repos/${repoToSearch}`);

        const repository = response.data;

        setRepositories([...repositories, repository]);
        setRepoToSearch('');
    }

    return (
    <>
        <img src={logoImg} alt="GitHub Explorer"></img>
        <Title>Explore Repositórios no Github</Title>
        <Form onSubmit={doAddRepository}>
            <input
                value={repoToSearch}
                onChange={e => setRepoToSearch(e.target.value)}
                placeholder="Insira o nome de repositório que quer pesquisar"
            ></input>
            <button type="submit">Pesquisar</button>
        </Form>
        <Repositories>
            {repositories.map(repo => (
                <a key={repo.full_name} href="teste">
                    <img
                        src={repo.owner.avatar_url}
                        alt={repo.owner.login}></img>
                    <div>
                        <strong>{repo.full_name}</strong>

                        <p>{repo.description}</p>
                    </div>

                    <FiChevronRight size={20} ></FiChevronRight>
                </a>
            ))}
        </Repositories>
    </>
    )
};

export default Repository;
