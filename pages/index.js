import React from 'react';
import MainGrid from '../src/componentes/MainGrid'
import Box from '../src/componentes/Box'
import { AlurakutMenu, AlurakutProfileSidebarMenuDefault, OrkutNostalgicIconSet } from '../src/lib/AlurakutCommons';
import { ProfileRelationsBoxWrapper } from '../src/componentes/ProfileRelations';

function ProfileSidebar(propriedades) {
  return (
    <Box as="aside">
          <img src={`https://github.com/${propriedades.githubUser}.png`} style={{ borderRadius: '30px'}}/>
          <hr />

          <p>
            <a className="boxLink" href={'https://github.com/${propriedades.githubUser}'}>
                @{propriedades.githubUser}
            </a>
          </p>
          <hr />

          <AlurakutProfileSidebarMenuDefault />
        </Box>
  )
}

export default function Home() {
  const usuarioAleatorio = 'Faylex';
  const [comunidades, setComunidades] = React.useState([{
    id: '3215687561432154',
    title: 'Eu odeio acordar cedo',
    image: 'https://alurakut.vercel.app/capa-comunidade-01.jpg',
  }]);
  // const comunidades = comunidades [0];
  // const alteradorDeComunidades/setComunidades = comunidades[1];

  console.log([comunidades])
  // const comunidades= ['Alurakut'];
  const pessoasFavoritas = [
    'nolram',
    'peas',
    'omariosouto',
    'juunegreiros',
    'marcobrunodev',
    'rafaballerini',
    'nolram',
    'peas',
    'omariosouto',
  ]

  return (
    <>
      <AlurakutMenu githubUser={usuarioAleatorio}/>
      <MainGrid>
        {/* <Box style="grid-area: profileArea;"> */}
        <div className="profileArea" style={{ gridArea: 'profileArea'}}>
          <ProfileSidebar githubUser={usuarioAleatorio} />
        </div>
        <div className="welcomeArea" style={{ gridArea: 'welcomeArea'}}>
          <Box>
            <h1 className="title">
              Bem Vindo(a)
            </h1>

            <OrkutNostalgicIconSet />
          </Box>

          <Box>
            <h2 classNme="subTitle">O que está fazendo?</h2>
            <form onSubmit={function handleCriaComunidade(e) {
                e.preventDefault();
                const dadosDoForm = new FormData (e.target);

                console.log('Campo: ', dadosDoForm.get('title'));
                console.log('Campo: ', dadosDoForm.get('image'));

                const comunidade ={
                  id: new Date().toISOString(),
                  titulo: dadosDoForm.get('title'),
                  image: dadosDoForm.get('image'),
                }
                const comunidadesAtualizadas = [...comunidades, comunidade]
                setComunidades(comunidadesAtualizadas)
            }}>
              <div>
                <input 
                  placeholder="Qual vai ser o nome da sua comunidade?" 
                  name="title" 
                  aria-label="Qual vai ser o nome da sua comunidade?"
                  type="text" 
                />
              </div>
              <div>
                <input
                  placeholder="Coloque uma URL para usarmos de capa"
                  name="image"
                  aria-label="Coloque uma URL para usarmos de capa?" 
                />
              </div>

              <button type="submit">
                Criar comunidade
              </button>
            </form>
          </Box>
        </div>
        <div className="profileRelationsArea" style={{ gridArea: 'profileRelationsArea'}}>
        <ProfileRelationsBoxWrapper>
          <h2 className="smallTitle">
            Comunidade ({comunidades.length})
          </h2>
        <ul>
            {comunidades.slice(0,6).map((itemAtual) => {
              return (
                <li key={itemAtual.id}>
                  <a href={`/users/${itemAtual.title}`}>
                    <img src={itemAtual.image} />
                    <span>{itemAtual.title}</span>
                  </a>
                </li>
              )

            })}
          </ul>
        </ProfileRelationsBoxWrapper>
        <ProfileRelationsBoxWrapper>
          <h2 className="smallTitle">
            Amigos ({pessoasFavoritas.length})
          </h2>


          <ul>
            {pessoasFavoritas.slice(0,6).map((itemAtual) => {
              return (
                <li key={itemAtual}>
                  <a href={`/users/${itemAtual}`} >
                    <img src={`https://github.com/${itemAtual}.png`} />
                    <span>{itemAtual}</span>
                  </a>
                </li>
              )

            })}
          </ul>
        </ProfileRelationsBoxWrapper>
        </div>
      </MainGrid>
    </>
  )
}
