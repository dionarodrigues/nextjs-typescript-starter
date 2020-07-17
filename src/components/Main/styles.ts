import styled from 'styled-components'

export const Wrapper = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  padding: 5rem;
  text-align: center;
  color: #ddd;
  background: #3a3a3f;
`

export const Logo = styled.div`
  margin-bottom: 3rem;
`

export const Title = styled.h1`
  font-weight: normal;
  font-size: 5rem;
  margin-bottom: 1rem;
  color: #ddd;
  line-height: 120%;
`

export const Description = styled.p`
  font-weight: normal;
  font-size: 2rem;
  color: #aaa;
  max-width: 40%;
`
