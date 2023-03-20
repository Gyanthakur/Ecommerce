import styled from "styled-components"

const Container = styled.div`
    height: 30px;
    background-color: teal;
    color: white;
    margin-top: 1px;
    margin-bottom: 1px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 15px;
    font-weight: 500;
`

const Announcement = () => {
  return (
    <div>
      <Container>
        Super Deal! Free shipping on orders Over $50
      </Container>
    </div>
  )
}

export default Announcement
