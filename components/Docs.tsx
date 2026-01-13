import styles from '../styles/Home.module.css';

const Docs = () => {
    return (
        <div className={styles.section}>
            <h2 className={styles.sectionTitle}>技術文件</h2>

            <div className={styles.glassCard}>
                <h3 className={styles.cardTitle}>API 參數表</h3>
                <p style={{ color: 'var(--text-secondary)' }}>目前支援的 URL 查詢參數：</p>

                <div className={styles.tableContainer}>
                    <table className={styles.apiTable}>
                        <thead>
                            <tr>
                                <th>參數</th>
                                <th>類型</th>
                                <th>描述</th>
                                <th>預設值</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>json</td>
                                <td>Boolean</td>
                                <td>是否回傳 JSON 格式數據 (範例: ?json=true)</td>
                                <td>false</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <h3 className={styles.cardTitle} style={{ marginTop: '2rem' }}>狀態碼說明</h3>
                <div className={styles.tableContainer}>
                    <table className={styles.apiTable}>
                        <thead>
                            <tr>
                                <th>代碼</th>
                                <th>描述</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>200</td>
                                <td>成功 (Success)，直接回傳圖片或 JSON 數據</td>
                            </tr>
                            <tr>
                                <td>404</td>
                                <td>找不到圖片或資源不存在</td>
                            </tr>
                            <tr>
                                <td>500</td>
                                <td>伺服器內部錯誤</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Docs;
