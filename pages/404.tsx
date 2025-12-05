import { Page, Text, Button, Image, Spacer } from '@geist-ui/core'
import { useRouter } from 'next/router'

export default function Custom404() {
    const router = useRouter()
    return (
        <Page dotBackdrop width="100%" padding={0}>
            <Page.Content>
                <div className="not-found">
                    <Text h1>你好像來錯地方了，這裡沒有你要的東西！</Text>
                    <Spacer h={1} />
                    {/* @ts-ignore */}
                    <Button onClick={() => router.back()} type="secondary" auto>回去</Button>
                    <Spacer h={2} />
                    <div className="image-container">
                        <img src="https://galgame-cg.vercel.app/api/random-image" alt="404" width="500px" />
                    </div>
                </div>
            </Page.Content>
            <style jsx>{`
        .not-found {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            height: 100vh;
            text-align: center;
        }
        .image-container {
            margin-top: 20px;
        }
        img {
            width: 500px;
            max-width: 100%;
            height: auto;
            padding: 10px;
            border-color: #ccc;
            border-width: 1px;
            border-style: solid;
            border-radius: 10px;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
            transition: transform 0.3s ease-in-out;
        }

        /* Add a hover effect to the image */
        img:hover {
            transform: scale(1.05);
        }
        /* image popup effect when page load */
        img {
            animation: fadeIn 0.5s ease-in-out;
        }
        @keyframes fadeIn {
            from {
                opacity: 0;
                transform: translateY(20px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }
        @keyframes fadeIn {
            from {
                opacity: 0;
                transform: translateY(20px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }
        `}</style>
        </Page>
    );
}