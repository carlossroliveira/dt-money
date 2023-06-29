import styled from 'styled-components'

export const ContainerSC = styled.section`
  display: grid;
  gap: 2rem;

  grid-template-columns: 350px 5fr 1fr;
  grid-template-rows: 70px 1fr 1fr 100px;
  grid-template-areas:
    'header'
    'sidebar'
    'footer';

  color: ${(props) => props.theme.GREEN_SCALE[300]};
`
