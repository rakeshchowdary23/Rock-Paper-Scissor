import styled from 'styled-components'

export const AppContainer = styled.div`
  background-color: #223a5f;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`

export const GameContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (min-width: 768px) {
    width: 70%;
  }
`

export const ChoicesContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;
  flex-wrap: wrap;
  width: 500px;
`

export const ChoiceButton = styled.button`
  background-color: transparent;
  border: 0;
  outline: none;
`

export const ChoiceImage = styled.img`
  width: 150px;
  margin: 20px;
`

export const RulesBtnContainer = styled.div`
  align-self: flex-end;
`

export const ResultContainer = styled.div`
  width: 700px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 20px;
`

export const ResultChoiceContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const ResultChoiceContainerHeading = styled.h1`
  color: #ffffff;
`

export const ResultChoicesContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const DisplayResult = styled.p`
  color: #ffffff;
  font-size: 20px;
`

export const PlayAgainButton = styled.button`
  color: #223a5f;
  background-color: #fff;
  padding: 10px 15px;
  font-size: 15px;
  font-weight: bold;
  border: 0;
  outline: none;
  border-radius: 5px;
`
