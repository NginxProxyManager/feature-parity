import {
  Burger,
  Container,
  Group,
  Image,
  useComputedColorScheme,
  useMantineColorScheme,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { FiGithub, FiMoon, FiSun } from "react-icons/fi";

import logo from "./logo-no-text.svg";
import classes from "./SiteHeader.module.css";

function SiteHeader() {
  const [opened, { toggle }] = useDisclosure(false);
  const { setColorScheme } = useMantineColorScheme();
  const computedColorScheme = useComputedColorScheme("light", {
    getInitialValueInEffect: true,
  });

  return (
    <header className={classes.header}>
      <Container size="md" className={classes.inner}>
        <Group className={classes.title}>
          <Image src={logo} alt="Logo" className={classes.logo} />
          Nginx Proxy Manager Features
        </Group>
        <Group gap={5} visibleFrom="sm">
          <a
            target="_blank"
            href="https://nginxproxymanager.com"
            className={classes.link}
            rel="noreferrer">
            Documentation
          </a>
          <a
            target="_blank"
            href="https://github.com/NginxProxyManager/nginx-proxy-manager"
            className={classes.link}
            rel="noreferrer">
            <FiGithub />
          </a>
          <a
            href="#"
            className={classes.link}
            onClick={(e) => {
              e.preventDefault();
              setColorScheme(
                computedColorScheme === "light" ? "dark" : "light",
              );
            }}>
            {computedColorScheme === "light" ? <FiMoon /> : <FiSun />}
          </a>
        </Group>
        <Burger opened={opened} onClick={toggle} hiddenFrom="xs" size="sm" />
      </Container>
    </header>
  );
}

export { SiteHeader };
