/** @jsx jsx */
import { jsx, Box, Text, Image } from "theme-ui"

const VizTile = ({ name, image, author, link, linkTarget }) => {

    return(
        <Box
        sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        }}
    >
        <a href={link} target={linkTarget} rel="noopener noreferrer">
        <Box
            sx={{
            position: 'relative',
            width: '100%',
            height: [300, 350],
            mb: "1vh",
            borderRadius: '10px',
            boxShadow: "base",
            "#overlay": {
                opacity: 1
            },
            }}
        >
            <Image src={image} sx={{ width: '100%', height: '100%', borderRadius: "10px" }} />
            <Box
            sx={{
                position: 'absolute',
                top: "72%",
                bottom: 0,
                left: 0,
                right: 0,
                borderRadius: '10px',
                transition: 'ease-in-out 0.12s',
                backgroundColor: 'black',
                opacity: 0
            }}
            id="overlay"
            >
            <Box
                sx={{
                position: 'absolute',
                top: '10%',
                left: '10px',
                }}
                id="text"
            >
                <Text
                sx={{
                    color: "white",
                    fontWeight: "600",
                    fontSize: [0, 1]
                }}
                >
                {name}
                </Text>
                <Text
                sx={{
                    color: "rgba(255, 255, 255, 0.7)",
                    fontSize: [0, 1]
                }}
                >
                {author}
            </Text>
            </Box>
            </Box>
        </Box>
        </a>
    </Box>
)
}
export default VizTile