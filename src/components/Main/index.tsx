import * as S from './styles'

const Main = ({
  title = 'NextJS boilerplate',
  description = 'A simple project starter to work with TypeScript, React, NextJS and Styled Components'
}) => (
  <S.Wrapper>
    <S.Logo>
      <img
        src="/img/logo-iceberg.svg"
        width="200"
        alt="Iceberg NextJS Boilerplate text and Iceberg Icon"
      />
    </S.Logo>
    <S.Title>{title}</S.Title>
    <S.Description>{description}</S.Description>
  </S.Wrapper>
)

export default Main
