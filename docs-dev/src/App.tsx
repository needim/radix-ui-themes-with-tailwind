import "./App.css";

import {
  Box,
  Code,
  Container,
  Em,
  Flex,
  Heading,
  Link,
  ScrollArea,
  Strong,
  Text,
  Theme,
} from "@radix-ui/themes";
import "@radix-ui/themes/styles.css";
import { ColorPaletteReference } from "./ColorPalette";
import { ThemeProvider } from "./ThemeProvider";
import { ThemeSwitcher } from "./ThemeSwitcher";
import { Usage } from "./Sections/Usage";
import { DecorativeBox } from "./Components/DecorativeBox";
import { CodeBlock } from "./Components/CodeBlock";
import { Callout } from "@radix-ui/themes";
import { ArrowTopRightIcon, InfoCircledIcon } from "@radix-ui/react-icons";

function App() {
  return (
    <ThemeProvider defaultTheme="system" storageKey="ui-theme">
      <Theme
        accentColor="gray"
        grayColor="slate"
        className="bg-background h-full"
      >
        <ScrollArea size="2" type="scroll">
          <Container className="px-4 mb-28">
            <div className="flex items-center justify-between py-4">
              <Heading className="font-code">
                radix-ui-themes-with-tailwind
              </Heading>
              <div className="flex items-center gap-4">
                <a
                  target="_blank"
                  href="https://www.npmjs.com/package/radix-ui-themes-with-tailwind"
                >
                  <img
                    src="https://badge.fury.io/js/radix-ui-themes-with-tailwind.svg"
                    alt="npm version"
                    height="18"
                  />
                </a>
                <ThemeSwitcher />
              </div>
            </div>
            <div>
              <Heading size="5" className="mb-2 mt-10">
                Introduction
              </Heading>
              <Text>
                Designed to simplify your web development experience by
                seamlessly integrating Radix UI Themes with the class-based
                utility system of Tailwind CSS. This plugin empowers you to
                effortlessly combine the strengths of both technologies for
                efficient and elegant web application development.
              </Text>
              <Heading size="5" className="mb-2 mt-10">
                Is This Plugin Necessary for Using Radix Themes?
              </Heading>
              <Text>
                No, the plugin is not mandatory. But, if you're accustomed to
                Tailwind and prefer not to use Radix Themes' layout utilities
                (such as <Code color="blue">{`<Flex />`}</Code>,{" "}
                <Code color="amber">{`<Grid />`}</Code>), this plugin is for
                you! With this plugin you can still develop using Tailwind
                classes (e.g.,{" "}
                <Code color="sky">className="flex items-center gap-2"</Code>
                ).
              </Text>
              <Heading size="5" className="mb-2 mt-10">
                Key Benefits
              </Heading>
              <div className="grid grid-cols-1 sm:grid-cols-3 xl:grid-cols-3 gap-12">
                <div>
                  <Heading size="3" className="mb-2 mt-4">
                    Tailwind CSS Efficiency
                  </Heading>
                  <Text>
                    Tailwind CSS is known for its straightforward class-based
                    approach, making it easier for developers to style their
                    projects. It offers flexibility and speed by allowing you to
                    apply styles directly in your HTML.
                  </Text>
                </div>
                <div>
                  <Heading size="3" className="mb-2 mt-5">
                    Radix UI Themes Elegance
                  </Heading>
                  <Text>
                    Radix UI Themes provides a curated set of pre-designed
                    components that are ready for production. This means you can
                    create polished user interfaces without starting from
                    scratch.
                  </Text>
                </div>
                <div>
                  <Heading size="3" className="mb-2 mt-5">
                    Perfect Integration
                  </Heading>
                  <Text>
                    Our plugin bridges the gap between Tailwind CSS and Radix UI
                    Themes, offering a cohesive development experience. It
                    eliminates the need for complex workarounds, helping you
                    achieve both functionality and aesthetics.
                  </Text>
                </div>
              </div>

              <Usage />

              <Heading size="6" className="mb-2 mt-8">
                Examples
              </Heading>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Heading size="4" className="mb-2 mt-5">
                    Radix UI Themes Layout
                  </Heading>

                  <div>
                    <CodeBlock
                      language="tsx"
                      value={`<Flex gap="3">
  <Box width="9" height="9">
    <DecorativeBox />
  </Box>
  <Box width="9" height="9">
    <DecorativeBox />
  </Box>
  <Box width="9" height="9">
    <DecorativeBox />
  </Box>
  <Box width="9" height="9">
    <DecorativeBox />
  </Box>
  <Box width="9" height="9">
    <DecorativeBox />
  </Box>
</Flex>`}
                    >
                      <Flex gap="3">
                        <Box width="9" height="9">
                          <DecorativeBox />
                        </Box>
                        <Box width="9" height="9">
                          <DecorativeBox />
                        </Box>
                        <Box width="9" height="9">
                          <DecorativeBox />
                        </Box>
                        <Box width="9" height="9">
                          <DecorativeBox />
                        </Box>
                        <Box width="9" height="9">
                          <DecorativeBox />
                        </Box>
                      </Flex>
                    </CodeBlock>
                  </div>
                </div>
                <div>
                  <Heading size="4" className="mb-2 mt-5">
                    With Tailwind CSS
                  </Heading>

                  <div>
                    <CodeBlock
                      language="tsx"
                      value={`<div className="flex gap-3">
  <div className="w-16 h-16">
    <DecorativeBox />
  </div>
  <div className="w-16 h-16">
    <DecorativeBox />
  </div>
  <div className="w-16 h-16">
    <DecorativeBox />
  </div>
  <div className="w-16 h-16">
    <DecorativeBox />
  </div>
  <div className="w-16 h-16">
    <DecorativeBox />
  </div>
</div>`}
                    >
                      <div className="flex gap-3">
                        <div className="w-16 h-16">
                          <DecorativeBox />
                        </div>
                        <div className="w-16 h-16">
                          <DecorativeBox />
                        </div>
                        <div className="w-16 h-16">
                          <DecorativeBox />
                        </div>
                        <div className="w-16 h-16">
                          <DecorativeBox />
                        </div>
                        <div className="w-16 h-16">
                          <DecorativeBox />
                        </div>
                      </div>
                    </CodeBlock>
                  </div>
                </div>
              </div>
              <div className="tip mt-4">
                <Callout.Root color="amber">
                  <Callout.Icon>
                    <InfoCircledIcon />
                  </Callout.Icon>
                  <Callout.Text>
                    Why 16 instead of 9? Because when mapping the spacing of
                    radix to tailwind, I found that radix's spacing scale is
                    very limited, and tailwind's spacing scale is much better.
                    So I ported tailwind spacing scale with radix scaling
                    factor. You can see the mapping in the{" "}
                    <Link
                      target="_blank"
                      color="blue"
                      className="inline-flex items-center"
                      href="https://github.com/needim/radix-ui-themes-with-tailwind/blob/main/src/index.ts#L220-L255"
                    >
                      source code <ArrowTopRightIcon />
                    </Link>
                  </Callout.Text>
                </Callout.Root>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Heading size="4" className="mb-2 mt-5">
                    Radix UI Themes Typography
                  </Heading>

                  <div>
                    <CodeBlock
                      language="tsx"
                      value={`<Text as="p">
  The <Em>most</Em> important thing to remember is,{" "}
  <Strong>stay positive</Strong>.
</Text>
<Text size="4" as="p">
  The <Em>most</Em> important thing to remember is,{" "}
  <Strong>stay positive</Strong>.
</Text>
<Heading size="4">Typographic principles</Heading>
<Heading size="5">Typographic principles</Heading>
<Heading size="6">Typographic principles</Heading>
<Heading size="7">Typographic principles</Heading>
<Heading size="8">Typographic principles</Heading>
<Heading size="9">Typographic principles</Heading>`}
                    >
                      <Text as="p">
                        The <Em>most</Em> important thing to remember is,{" "}
                        <Strong>stay positive</Strong>.
                      </Text>
                      <Text size="4" as="p">
                        The <Em>most</Em> important thing to remember is,{" "}
                        <Strong>stay positive</Strong>.
                      </Text>
                      <Heading size="4">Typographic principles</Heading>
                      <Heading size="5">Typographic principles</Heading>
                      <Heading size="6">Typographic principles</Heading>
                      <Heading size="7">Typographic principles</Heading>
                      <Heading size="8">Typographic principles</Heading>
                      <Heading size="9">Typographic principles</Heading>
                    </CodeBlock>
                  </div>
                </div>
                <div>
                  <Heading size="4" className="mb-2 mt-5">
                    With Tailwind CSS
                  </Heading>

                  <div>
                    <CodeBlock
                      language="tsx"
                      value={`<p>
  The <em>most</em> important thing to remember is,{" "}
  <strong>stay positive</strong>.
</p>
<p className="text-lg">
  The <em>most</em> important thing to remember is,{" "}
  <strong>stay positive</strong>.
</p>
<h6>Typographic principles</h6>
<h5>Typographic principles</h5>
<h4>Typographic principles</h4>
<h3>Typographic principles</h3>
<h2>Typographic principles</h2>
<h1>Typographic principles</h1>`}
                    >
                      <p>
                        The <em>most</em> important thing to remember is,{" "}
                        <strong>stay positive</strong>.
                      </p>
                      <p className="text-lg">
                        The <em>most</em> important thing to remember is,{" "}
                        <strong>stay positive</strong>.
                      </p>
                      <h6>Typographic principles</h6>
                      <h5>Typographic principles</h5>
                      <h4>Typographic principles</h4>
                      <h3>Typographic principles</h3>
                      <h2>Typographic principles</h2>
                      <h1>Typographic principles</h1>
                    </CodeBlock>
                  </div>
                </div>
              </div>

              <Heading size="5" className="mb-8 mt-10">
                Using Radix colors with Tailwind
              </Heading>
              <ColorPaletteReference />
            </div>
          </Container>
        </ScrollArea>
      </Theme>
    </ThemeProvider>
  );
}

export default App;
