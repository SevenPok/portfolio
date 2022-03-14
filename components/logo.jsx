import Link from 'next/link'
import { Img, Text, useColorModeValue } from '@chakra-ui/react'
import styled from '@emotion/styled'

const LogoBox = styled.span`
  font-weight: bold;
  font-size: 18px;
  display: inline-flex;
  align-items: center;
  height: 30px;
  line-height: 20px;
  padding: 10px;
  img {
    transition: 200ms ease;
  }
  &:hover img {
    transform: rotate(20deg);
  }
`

const Logo = () => {
  const star = `/images/star.png`
  return (
    <Link href="/" scroll={false}>
      <a>
        <LogoBox>
          <Img src={star} width={5} height={5} alt="Logo" loading="lazy" />
          <Text
            color={useColorModeValue('gray.800', 'whiteAlpha.900')}
            fontFamily="M PLUS Rounded 1c, sans-serif"
            fontWeight="bold"
            fontSize="xl"
            ml={1.5}
          >
            Gerber Colindres
          </Text>
        </LogoBox>
      </a>
    </Link>
  )
}

export default Logo
