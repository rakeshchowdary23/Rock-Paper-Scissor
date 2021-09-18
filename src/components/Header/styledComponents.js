import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  padding: 10px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border: 2px solid #fff;
  border-radius: 10px;
`

export const Heading = styled.h1`
  color: #fff;
  font-family: 'Bree Serif';
  font-size: 30px;
  margin: 0;
`

export const ScoreContainer = styled.div`
  background-color: #fff;
  border-radius: 10px;
  width: 120px;
  height: 120px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 10px;
`
export const ScoreText = styled.p`
  color: #223a5f;
  font-weight: bold;
  font-size: 20px;
  margin: 0;
`

export const Score = styled.p`
  color: #223a5f;
  font-size: 25px;
  margin: 0;
  font-family: 'Roboto';
`
