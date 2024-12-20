export default function Footer() {
  const [isAtBottom, setIsAtBottom] = useState(false);
  const [isDark] = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      const isBottom =
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight;
      setIsAtBottom(isBottom);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <footer className='footer'>
      Created with 💝 by Piyush
    </footer>
  )
}
