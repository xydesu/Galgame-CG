import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { Snippet, Text, Page, Grid, Divider, Link, Spacer, Card } from '@geist-ui/core';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { oneDark } from 'react-syntax-highlighter/dist/cjs/styles/prism';


const htmlExample = `<img src='https://galgame-cg.vercel.app/api/random-image'/>`

const css = `.background {
  background-image: url('https://galgame-cg.vercel.app/api/random-image');
}`

const install1 = `git clone https://github.com/XingYanTW/Galgame-CG.git`
const install2 = `cd Galgame-CG`
const install3 = `yarn install`

const dev = `yarn dev`

const build = `yarn build`
const start = `yarn start`


export default function Home() {
  return (
    <Page dotBackdrop width="100%" padding={0}>
      <Head>
        <title>Galgame CG</title>
        <meta name="description" content="隨機顯示一張 Galgame CG 圖片" />
      </Head>
      {/* @ts-ignore */}
      <Link
        href="https://github.com/XingYanTW/Galgame-CG"
        target="_blank"
        rel="noopener noreferrer"
        className={styles.githubLink}
        block
      >
        <img
          src="github-mark.png"
          alt="GitHub"
          className={styles.githubMark}
        />
      </Link>

      <div className={styles.headerContainer}>
        <h1 className={styles.title}>Galgame CG</h1>
      </div>

      <Page.Content style={{ overflow: 'visible' }}>
        <Grid.Container gap={2} justify="center" style={{ alignItems: 'stretch' }}>
          <Grid xs={24} md={18}>
            <Card width="100%">
              <Text h2 id='usage'>使用方法</Text>
              <Divider />
              <Text>HTML範例</Text>
              <SyntaxHighlighter language="html" style={oneDark}>{htmlExample}</SyntaxHighlighter>
              <Spacer h={1} />
              <Text>CSS範例</Text>
              <SyntaxHighlighter language="css" style={oneDark}>{css}</SyntaxHighlighter>
              <Spacer h={2} />

              <Text h2 id='build'>開發</Text>
              <Divider />
              <Text>下載專案</Text>
              <Snippet text={[install1, install2, install3]} width="100%" />
              <Spacer h={1} />
              <Text>以開發模式啟動</Text>
              <Snippet text={dev} width="100%" />
              <Spacer h={1} />
              <Text>以生產環境啟動</Text>
              <Snippet text={[build, start]} width="100%" />
              <Spacer h={2} />

              <Text h2 id='recommendations'>CG 推薦</Text>
              <Divider />

              <Text h3> 1. Fork </Text>
              <Text>點擊右上角Fork後將圖片丟進public\images資料夾並提出pull request</Text>

              <Text h3> 2. Issue </Text>
              <Text>
                {/* @ts-ignore */}
                <Link href='https://github.com/XingYanTW/Galgame-CG/issues/new' color target="_blank">點擊此連結</Link>
                到達Issue頁面提交新的Issue
              </Text>
            </Card>
          </Grid>
          <Grid xs={0} md={6} style={{ height: '100%' }}>
            <div style={{ position: 'sticky', top: '20px', width: '100%' }}>
              <Card>
                {/* @ts-ignore */}
                <Link href="#usage" block>使用方法</Link>
                <Spacer h={0.5} />
                {/* @ts-ignore */}
                <Link href="#build" block>開發</Link>
                <Spacer h={0.5} />
                {/* @ts-ignore */}
                <Link href="#recommendations" block>CG 推薦</Link>
              </Card>
            </div>
          </Grid>
        </Grid.Container>
      </Page.Content>

      <div
        className={styles.backToTop}
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      >
        <img src="/arrow.svg" alt="Back to top" />
      </div>

    </Page>
  )
}
