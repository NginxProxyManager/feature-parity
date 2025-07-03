import { useState } from "react";

import {
  Alert,
  Button,
  Container,
  Group,
  Modal,
  Space,
  Table,
  Text,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { FiCheck, FiHelpCircle, FiX } from "react-icons/fi";

import features from "src/data";
import type { Feature } from "src/data/interfaces";

import classes from "./index.module.css";

const getIcon = (implemented?: boolean, size = 20) => {
  if (implemented === true) {
    return <FiCheck size={size} className={classes.implemented} />;
  }
  if (implemented === false) {
    return <FiX size={size} className={classes.notImplemented} />;
  }
  return <FiHelpCircle size={size} className={classes.unknown} />;
};

const getText = (implemented?: boolean) => {
  return (
    <Group>
      {getIcon(implemented, 16)}
      {implemented === true
        ? "Implemented"
        : implemented === false
          ? "Not Implemented"
          : "Unknown"}
    </Group>
  );
};

function Home() {
  const [current, setCurrent] = useState(undefined as Feature | undefined);
  const [opened, { open, close }] = useDisclosure(false);

  const handleClick = (feature: Feature) => {
    setCurrent(feature);
    open();
  };

  return (
    <Container py="md">
      <Alert variant="light" color="cyan" radius="md" title="">
        <Text size="sm" mb={8}>
          <strong>Welcome to Nginx Proxy Manager Features!</strong>
        </Text>
        <Text size="sm" mb={8}>
          This page provides a comprehensive overview of the features available
          in both v2 and v3 of Nginx Proxy Manager. The icons indicate whether a
          feature is implemented, not implemented, or unknown in each version.
        </Text>
        <Text size="sm">
          The ultimate goal is to implement all v2 features in v3 where
          possible.
        </Text>
      </Alert>
      <Table highlightOnHover horizontalSpacing="lg" verticalSpacing="sm">
        <Table.Thead>
          <Table.Tr>
            <Table.Th>&nbsp;</Table.Th>
            <Table.Th className={classes.fixedWidth}>v2</Table.Th>
            <Table.Th className={classes.fixedWidth}>v3</Table.Th>
          </Table.Tr>
        </Table.Thead>
        <Table.Tbody>
          {features.map((item, index) => (
            <Table.Tr key={index}>
              <Table.Td>
                <Button
                  color="gray"
                  variant="transparent"
                  onClick={() => handleClick(item)}>
                  {item.name}
                </Button>
              </Table.Td>
              <Table.Td className={classes.fixedWidth}>
                {getIcon(item.v2)}
              </Table.Td>
              <Table.Td className={classes.fixedWidth}>
                {getIcon(item.v3)}
              </Table.Td>
            </Table.Tr>
          ))}
        </Table.Tbody>
      </Table>
      <Modal size="md" opened={opened} onClose={close} title={current?.name}>
        <Table variant="vertical" layout="fixed" withTableBorder>
          <Table.Tbody>
            <Table.Tr>
              <Table.Th w={100} className={classes.tableHeader}>
                v2
              </Table.Th>
              <Table.Td>{getText(current?.v2)}</Table.Td>
            </Table.Tr>
            <Table.Tr>
              <Table.Th className={classes.tableHeader}>v3</Table.Th>
              <Table.Td>{getText(current?.v3)}</Table.Td>
            </Table.Tr>
          </Table.Tbody>
        </Table>
        <Space h={16} />
        <Text size="sm">
          {current?.description || (
            <em>No description available for this feature.</em>
          )}
        </Text>
      </Modal>
    </Container>
  );
}

export default Home;
