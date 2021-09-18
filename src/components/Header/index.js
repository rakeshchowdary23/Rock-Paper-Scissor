import {
  Container,
  Heading,
  ScoreContainer,
  ScoreText,
  Score,
} from './styledComponents'

const Header = props => {
  const {score} = props
  return (
    <Container>
      <Heading>
        ROCK <br />
        PAPER <br />
        SCISSORS
      </Heading>
      <ScoreContainer>
        <ScoreText>Score</ScoreText>
        <Score>{score}</Score>
      </ScoreContainer>
    </Container>
  )
}

export default Header
