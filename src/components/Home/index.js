import {Component} from 'react'

import {
  AppContainer,
  ChoicesContainer,
  ChoiceImage,
  ChoiceButton,
  RulesBtnContainer,
  GameContainer,
  ResultContainer,
  ResultChoicesContainer,
  ResultChoiceContainer,
  ResultChoiceContainerHeading,
  DisplayResult,
  PlayAgainButton,
} from './styledComponents'

import Header from '../Header'
import Rules from '../Rules'

const gameStatusConstants = {
  initial: 'INITIAL',
  won: 'WON',
  draw: 'DRAW',
  lose: 'LOSE',
}

class Home extends Component {
  state = {
    score: 0,
    renderResult: false,
    playerChoiceId: '',
    opponentChoiceId: '',
    gameStatus: gameStatusConstants.initial,
  }

  displayChoices = () => {
    const {choicesList} = this.props
    return (
      <ChoicesContainer>
        {choicesList.map(eachItem => {
          const altText = eachItem.id.toLowerCase().concat('Button')
          const onClickBtn = () => {
            this.setState({playerChoiceId: eachItem.id}, this.onGamePlay)
          }
          return (
            <ChoiceButton
              key={eachItem.id}
              type="button"
              onClick={onClickBtn}
              data-testid={altText}
            >
              <ChoiceImage src={eachItem.image} alt={eachItem.id} />
            </ChoiceButton>
          )
        })}
      </ChoicesContainer>
    )
  }

  onGamePlay = () => {
    const {playerChoiceId} = this.state
    const {choicesList} = this.props
    const randomNumber = Math.floor(Math.random() * 3)
    const opponentChoiceId = choicesList[randomNumber].id

    if (playerChoiceId === 'ROCK' && opponentChoiceId === 'PAPER') {
      this.setState(prevState => ({
        gameStatus: gameStatusConstants.lose,
        score: prevState.score - 1,
        opponentChoiceId,
        renderResult: true,
      }))
    } else if (playerChoiceId === 'ROCK' && opponentChoiceId === 'SCISSORS') {
      this.setState(prevState => ({
        gameStatus: gameStatusConstants.won,
        score: prevState.score + 1,
        opponentChoiceId,
        renderResult: true,
      }))
    } else if (playerChoiceId === 'PAPER' && opponentChoiceId === 'ROCK') {
      this.setState(prevState => ({
        gameStatus: gameStatusConstants.won,
        score: prevState.score + 1,
        opponentChoiceId,
        renderResult: true,
      }))
    } else if (playerChoiceId === 'PAPER' && opponentChoiceId === 'SCISSORS') {
      this.setState(prevState => ({
        gameStatus: gameStatusConstants.lose,
        score: prevState.score - 1,
        opponentChoiceId,
        renderResult: true,
      }))
    } else if (playerChoiceId === 'SCISSORS' && opponentChoiceId === 'ROCK') {
      this.setState(prevState => ({
        gameStatus: gameStatusConstants.lose,
        score: prevState.score - 1,
        opponentChoiceId,
        renderResult: true,
      }))
    } else if (playerChoiceId === 'SCISSORS' && opponentChoiceId === 'PAPER') {
      this.setState(prevState => ({
        gameStatus: gameStatusConstants.won,
        score: prevState.score + 1,
        opponentChoiceId,
        renderResult: true,
      }))
    } else {
      this.setState(prevState => ({
        gameStatus: gameStatusConstants.draw,
        score: prevState.score,
        opponentChoiceId,
        renderResult: true,
      }))
    }
  }

  onClickPlayAgain = () => {
    this.setState({
      renderResult: false,
      playerChoiceId: '',
      opponentChoiceId: '',
      gameStatus: gameStatusConstants.initial,
    })
  }

  displayResultPage = () => {
    const {choicesList} = this.props
    const {playerChoiceId, opponentChoiceId, gameStatus} = this.state

    const playerChoiceObj = choicesList.find(
      eachItem => eachItem.id === playerChoiceId,
    )

    const opponentChoiceObj = choicesList.find(
      eachItem => eachItem.id === opponentChoiceId,
    )

    let displayText = null
    switch (gameStatus) {
      case gameStatusConstants.won:
        displayText = 'YOU WON'
        break
      case gameStatusConstants.draw:
        displayText = 'IT IS DRAW'
        break
      default:
        displayText = 'YOU LOSE'
        break
    }

    const playerChoiceImage = playerChoiceObj.image
    const opponentChoiceImage = opponentChoiceObj.image

    return (
      <ResultContainer>
        <ResultChoicesContainer>
          <ResultChoiceContainer>
            <ResultChoiceContainerHeading>YOU</ResultChoiceContainerHeading>
            <ChoiceImage src={playerChoiceImage} alt="your choice" />
          </ResultChoiceContainer>
          <ResultChoiceContainer>
            <ResultChoiceContainerHeading>
              OPPONENT
            </ResultChoiceContainerHeading>
            <ChoiceImage src={opponentChoiceImage} alt="opponent choice" />
          </ResultChoiceContainer>
        </ResultChoicesContainer>
        <DisplayResult>{displayText}</DisplayResult>
        <PlayAgainButton type="button" onClick={this.onClickPlayAgain}>
          PLAY AGAIN
        </PlayAgainButton>
      </ResultContainer>
    )
  }

  render() {
    const {score, renderResult} = this.state
    return (
      <AppContainer>
        <GameContainer>
          <Header score={score} />
          {renderResult ? this.displayResultPage() : this.displayChoices()}
          <RulesBtnContainer>
            <Rules />
          </RulesBtnContainer>
        </GameContainer>
      </AppContainer>
    )
  }
}

export default Home
