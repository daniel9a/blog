import React from "react"
import styled from "styled-components"
import { Algolia } from "styled-icons/fa-brands/Algolia"
import { Search } from "styled-icons/fa-solid/Search"

export const Root = styled.div`
  position: relative;
  display: grid;
  grid-gap: 1em;
  color: ${props => props.theme.textColor};
`

export const SearchIcon = styled(Search)`
  margin-top: 0.7em;
  width: 1.4em;
  pointer-events: none;
  color: white;
`

export const Form = styled.form`
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
`

export const HitsWrapper = styled.div`
  display: ${props => (props.show ? `grid` : `none`)};
  
  background: white;
  max-height: 80vh;
  overflow: scroll;
  z-index: 2;
  position: absolute;
  right: 0;
  top: calc(100% + 0.5em);
  width: 80vw;
  max-width: 30em;
  box-shadow: 0 0 5px 0 black;
  padding: 0.7em 1em 0.4em;
  border-radius: ${props => props.theme.smallBorderRadius};
  * {
    margin-top: 0;
  }
  > div {
    padding-top: 0.6em;
  }
  div + div {
    margin-top: 0.6em;
    border-top: 1px solid ${props => props.theme.lighterGray};
  }
  mark {
    
    color: DarkGrey;
    
    background: white;
  }
  header {
    display: flex;
    justify-content: space-between;
    border-bottom: 2px solid ${props => props.theme.darkGray};
    h3 {
      color: black;
      background: ${props => props.theme.gray};
      padding: 0.1em 0.4em;
      border-radius: ${props => props.theme.smallBorderRadius};
      margin-bottom: 0.3em;
    }
  }
  * + header {
    padding-top: 1em;
  }
  h4 {
    color: black;
    margin-bottom: 0.3em;
  }
`

export const PoweredBy = () => (
  <span css="font-size: 0.6em; text-align: end; padding: 0;">
    Powered by{` `}
    <a href="https://algolia.com">
      <Algolia className="algolia" size="1em" /> Algolia
    </a>
  </span>
)
