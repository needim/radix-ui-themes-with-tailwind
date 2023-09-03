import "./App.css";

import { Container, Heading, ScrollArea, Text, Theme } from "@radix-ui/themes";
import "@radix-ui/themes/styles.css";
import ReactRotatingText from "react-rotating-text";
import { ColorPaletteReference } from "./ColorPalette";
import { ThemeProvider } from "./ThemeProvider";
import { ThemeSwitcher } from "./ThemeSwitcher";
import { Usage } from "./Sections/Usage";

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
                <span className="text-gray">
                  <ReactRotatingText
                    style={{ width: 64, display: "inline-block" }}
                    cursor={false}
                    eraseMode="overwrite"
                    items={["npm", "pnpm", "yarn"]}
                  />{" "}
                  add
                </span>{" "}
                radix-ui-themes-with-tailwind
              </Heading>
              <ThemeSwitcher />
            </div>
            <div>
              <Heading size="5" className="mb-2 mt-10">
                Introduction
              </Heading>
              <div className="text-xl my-2 font-bold">Introduction</div>
              <Text>
                Designed to simplify your web development experience by
                seamlessly integrating Radix UI Themes with the class-based
                utility system of Tailwind CSS. This plugin empowers you to
                effortlessly combine the strengths of both technologies for
                efficient and elegant web application development.
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
