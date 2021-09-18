import styled from 'styled-components'

export const PopupContainer = styled.div`
  background-color: #fff;
  padding: 20px 40px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const TriggerButton = styled.button`
  color: #223a5f;
  font-weight: bold;
  font-size: 15px;
  background-color: #fff;
  border: 0;
  outline: none;
  padding: 8px 12px;
  border-radius: 5px;
  cursor: pointer;
`
export const RulesContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`

export const RulesImage = styled.img`
  width: 70%;
`

export const CloseButton = styled.button`
  border: 0;
  outline: none;
  align-self: flex-end;
  cursor: pointer;
  width: 30px;
  height: 30px;
`
