import { Box } from "@radix-ui/themes";

export function DecorativeBox(
  props: React.ComponentPropsWithoutRef<typeof Box>
) {
  return (
    <Box
      {...props}
      style={{
        height: "100%",
        backgroundColor: "var(--gray-a3)",
        border: "1px solid var(--gray-a7)",
        borderRadius: "var(--radius-1)",
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='6' height='6' viewBox='0 0 6 6' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%239C92AC' fill-opacity='0.2' fill-rule='evenodd'%3E%3Cpath d='M5 0h1L0 6V5zM6 5v1H5z'/%3E%3C/g%3E%3C/svg%3E")`,
        ...props.style,
      }}
    />
  );
}
