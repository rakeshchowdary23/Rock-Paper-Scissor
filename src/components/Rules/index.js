import Popup from 'reactjs-popup'

import {RiCloseLine} from 'react-icons/ri'

import {
  TriggerButton,
  RulesContainer,
  RulesImage,
  PopupContainer,
  CloseButton,
} from './styledComponents'

const Rules = () => (
  <RulesContainer>
    <Popup trigger={<TriggerButton>Rules</TriggerButton>} modal>
      {close => (
        <PopupContainer>
          <CloseButton type="button" onClick={() => close()}>
            <RiCloseLine />
          </CloseButton>
          <RulesImage
            src="https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rules-image.png"
            alt="rules"
          />
        </PopupContainer>
      )}
    </Popup>
  </RulesContainer>
)

export default Rules
