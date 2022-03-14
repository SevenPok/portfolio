import { Box, LinkBox, LinkOverlay, Text } from '@chakra-ui/react'
import { Global } from '@emotion/react'
import Image from 'next/image'
import NextLink from 'next/link'
import { motion } from 'framer-motion'

export const GridItem = ({ children, href, title, thumbnail }) => {
  return (
    <Box w="100%" textAlign="center">
      <LinkBox cursor="pointer">
        <Image
          src={thumbnail}
          alt={title}
          className="grid-item-thumbnail"
          placeholder="blur"
          loading="lazy"
        />
        <LinkOverlay href={href} target="_blank">
          <Text mt={2}>{title}</Text>
        </LinkOverlay>
        <Text fontSize={14}>{children}</Text>
      </LinkBox>
    </Box>
  )
}

export const WorkGridItem = ({ children, id, title, thumbnail, path }) => {
  return (
    <motion.div
      whileHover={{
        scale: 1.05,
        transition: {
          duration: 0.2
        }
      }}
    >
      <Box w="100%" textAlign="center">
        <NextLink href={`/works/${id}`} scroll={false} passHref={path}>
          <LinkBox cursor="pointer" style={{ borderRadius: '12px' }}>
            <Image
              src={thumbnail}
              alt={title}
              className="grid-item-thumbnail"
              placeholder="blur"
              loading="lazy"
            />
            <LinkOverlay href={`/works/${id}`}>
              <Text mt={2} fontSize={20}>
                {title}
              </Text>
            </LinkOverlay>
            <Text fontSize={14}>{children}</Text>
          </LinkBox>
        </NextLink>
      </Box>
    </motion.div>
  )
}

export const GridItemStyle = () => {
  return (
    <Global
      styles={`
    .grid-item-thumbnail {
      border-radius: 15px;
    }
  `}
    />
  )
}
