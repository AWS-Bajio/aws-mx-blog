import styled from "styled-components";

const wrapper = styled.div`
background-color: #FFFFFF;
min-height:100vh;

.blog-container {
  display: grid;
  grid-template-columns: 9fr 3fr;
  width: 100%;
  padding-top: 100px;

}

.post-container {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 12px;
  
}

.cover {
  grid-row: 1/ span 2
}


.post-container > * {
padding-bottom: 24px;
margin-bottom:36px;
}

@media screen and (max-width: 768px) {
.blog-container, .post-container {
  grid-template-columns: 12fr;
}

.entry-container {
  grid-template-columns: 1fr;
}
}
`

export default wrapper;