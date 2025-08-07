import { useTheme } from "next-themes"
import { Toaster as Sonner } from "sonner";

const Toaster = ({
  ...props
}) => {
  const { theme = "system" } = useTheme()

  return (
    <Sonner
      theme={theme}
      className="toaster group shadow shadow-[#144ee361]"
      style={
        {
          "--normal-bg": "#144EE3",
          "--normal-text": "#FFFFFF",
          "--normal-border": "#144EE3"
        }
      }
      {...props} />
  );
}

export { Toaster }
