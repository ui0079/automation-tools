import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import {
  FormControl,
  FormErrorMessage,
  FormHelperText,
  FormLabel,
} from "@chakra-ui/form-control";
import { Input } from "@chakra-ui/input";
import { useState } from "react";
import { Button } from "@chakra-ui/button";
import { Heading, Text } from "@chakra-ui/layout";
import axios from "axios";
import {
  Tab,
  Table,
  TableContainer,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Tbody,
  Td,
  Textarea,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import { EmailForm, EmailSetting } from "@/components/auto-mailer";
import { EmailConfigType } from "@/types/types";
import { NavBar } from "@/components/ui";

export default function Home() {
  const [mailConfig, setMailConfig] = useState<EmailConfigType>({
    host: "",
    port: 587,
    user: "",
    email: "",
    password: ""
  });

  return (
    <>
      <NavBar/>
      <Head>
        <title>Auto Mailer</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Heading>Auto Mailer</Heading>
      <Tabs isFitted variant="enclosed">
        <TabList>
          <Tab>送信内容</Tab>
          <Tab>設定</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <EmailForm config={mailConfig} />
          </TabPanel>
          <TabPanel>
            <EmailSetting
              mailConfig={mailConfig}
              setMailConfig={setMailConfig}
            />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </>
  );
}
