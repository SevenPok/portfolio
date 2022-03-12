import {
  Box,
  Container,
  Link,
  Menu,
  MenuItem,
  IconButton,
  MenuButton,
  MenuList,
  Stack,
  useColorModeValue,
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import NextLink from "next/link";

const LinkItem = ({ href, path, target, children, ...props }) => {
  const active = path === href;
  const inactiveColor = useColorModeValue("gray200", "whiteAlpha.900");
  return (
    <NextLink href={href} passHref scroll={false}>
      <Link
        p={2}
        bg={active ? "grassTeal" : undefined}
        color={active ? "#202023" : inactiveColor}
        target={target}
        {...props}
      >
        {children}
      </Link>
    </NextLink>
  );
};

const Navbar = () => {
  return (
    <Box>
      <Container display="flex" p={2} align="center" justify="space-between">
        <Stack
          direction={{ base: "column", md: "row" }}
          display={{ base: "none", md: "flex" }}
          width={{ base: "full", md: "auto" }}
          alignItems="center"
          flexGrow={1}
          mt={{ base: 4, md: 0 }}
        >
          <LinkItem href="/">Home</LinkItem>
          <LinkItem href="/about">About</LinkItem>
          <LinkItem href="/works">Works</LinkItem>
          <LinkItem href="/contact">Contact</LinkItem>
        </Stack>
        <Box flex={1} align="right">
          <Box ml={2} display={{ base: "inline-block", md: "none" }}>
            <Menu isLazy id="navbar-menu">
              <MenuButton
                as={IconButton}
                icon={<HamburgerIcon />}
                variant="outline"
                aria-label="Options"
              />
              <MenuList>
                <NextLink href={"/"}>
                  <MenuItem as={Link}>Home</MenuItem>
                </NextLink>
                <NextLink href={"/about"}>
                  <MenuItem as={Link}>About</MenuItem>
                </NextLink>
                <NextLink href={"/works"}>
                  <MenuItem as={Link}>Works</MenuItem>
                </NextLink>
                <NextLink href={"/contact"}>
                  <MenuItem as={Link}>Contact</MenuItem>
                </NextLink>
              </MenuList>
            </Menu>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Navbar;
