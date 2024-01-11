import styled from 'styled-components'

const Button = styled.button`
  align-items: center;
  background-color: #ffffff;
  border-radius: 0.5rem;
  border: 1px solid rgb(243, 244, 246);
  color: rgb(91, 33, 182);
  display: inline-flex;
  font-weight: 500;
  justify-content: center;
  line-height: 1;
  padding: 1rem 1.25rem;
  width: 100%;
`

const Label = styled.p`
  color: rgb(17, 24, 39);
  font-size: 0.875rem;
  font-weight: 500;
  line-height: 1.25rem;
  margin-top: 0.25rem;
  text-align: center;
  width: 100%;
`

export const SocialButton = ({ label, icon, provider, onLogin }) => {
  return (
    <Button onClick={onLogin(provider)}>
      {icon}

      <Label>{label}</Label>
    </Button>
  )
}
