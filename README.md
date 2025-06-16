# Mamaco Modpack Website

Bem-vindo ao repositório do **Mamaco Modpack Website**, um projeto Django que fornece uma interface web para o Mamaco Modpack, um pacote de mods para Minecraft. Este site oferece instruções detalhadas para instalação do modpack, tutoriais e links para downloads.

## Sobre o Projeto

O Mamaco Modpack Website é uma aplicação web construída com Django, projetada para guiar os jogadores na instalação e configuração do Mamaco Modpack no Minecraft. O site inclui quatro seções principais:
- **Modpack**: Guia passo a passo para instalar o CurseForge e o Mamaco Modpack, com tutoriais visuais.
- **Tutoriais**: Dicas sobre construção, mineração, agricultura e redstone no Minecraft.
- **Downloads**: Links para baixar o modpack, o CurseForge e pacotes de recursos.

## Pré-requisitos

- Python 3.8+
- Django 4.x ou superior
- Navegador web moderno (Chrome, Firefox, etc.)
- Conexão com a internet para carregar o Font Awesome via CDN

## Instalação

1. **Clonar o Repositório**
   ```bash
   git clone https://github.com/seu-usuario/mamaco-modpack.git
   cd mamaco-modpack
   ```

2. **Criar e Ativar um Ambiente Virtual**
   ```bash
   python -m venv venv
   source venv/bin/activate  # Linux/Mac
   venv\Scripts\activate  # Windows
   ```

3. **Instalar Dependências**
   Execute o seguinte comando:
   ```bash
   pip install -r requirements.txt
   ```

6. **Executar o Servidor**
   ```bash
   python manage.py runserver
   ```
   Acesse o site em `http://127.0.0.1:8000/`.

## Uso

- **Navegação**: Use o menu no topo para alternar entre as seções (Modpack, Tutoriais, Downloads, Sobre). O JavaScript em `script.js` controla a visibilidade das seções com base nos cliques nos links.
- **Tutoriais**: Siga as instruções detalhadas na seção Modpack para instalar o CurseForge e o Mamaco Modpack.
- **Downloads**: Baixe os arquivos necessários (modpack, CurseForge, resource packs) diretamente dos links fornecidos.
- **Botão "Voltar ao topo"**: Clique no botão flutuante para rolar até o início da página.

## Licença

Este projeto é licenciado sob a [MIT License](LICENSE).

---

**Desenvolvido por Hugo**