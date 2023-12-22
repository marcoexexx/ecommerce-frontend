"use client"
// import { useStore } from "@/hooks";
import { ThemeProvider } from "@mui/material/styles";
import { themeCreator } from "./base";
import { CssBaseline } from "@mui/material";
import NextAppDirEmotionCacheProvider from "./emotion-cache";


// TODO: theme context
export default function ThemeRegistry(
  {children}: {children: React.ReactNode}
) {
  // const { state } = useStore()

  const theme = themeCreator(/* state.theme */ "light")

  return (
    <NextAppDirEmotionCacheProvider options={{ key: "mui" }}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </NextAppDirEmotionCacheProvider>
  )
}
