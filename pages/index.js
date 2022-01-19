import Head from "next/head";
import Charts from "../components/dashboard/dashboardChart/Charts";
import AbBank from "../components/dashboard/AbBank";
import Chase from "../components/dashboard/Chase";
import MoreVert from "../components/dashboard/MoreVert";
import styles from "../styles/Home.module.css";


export default function Home() {
  const headingMessage = "Here’s what’s going on with Lajou Cafe finance"
  const tableDatas = [
    {
      "id": 1,
      "account": "Entertainment (600)",
      "month": "250000",
      "ytd": "10453.75"
    },
    {
      "id": 2,
      "account": "Advertising (620)",
      "month": "0.00",
      "ytd": "53.6"
    },
    {
      "id": 3,
      "account": "Inventory (140)",
      "month": "0.00",
      "ytd": "0.00"
    },
    {
      "id": 4,
      "account": "Sales (400)",
      "month": "7654.10",
      "ytd": "29250.85"
    },
  ];

  return (
    <div>
      <Head>
        <title>Substance | Dashboard</title>
        <meta name="description" content="This is an Admin dashboard" />
        <link rel="icon" href="/substance.svg" />
      </Head>
      <div className="container">
        <h2 className={styles.heading}>Hi, Max</h2>
        <div className="d-flex justify-content-between">
          <p className={styles.subtitle}>{ headingMessage }</p>
          <div className="d-flex justify-content-center">
            <span className={styles.private}>Private </span>
            <label className="switch">
              <input type="checkbox" />
              <span className="slider round"></span>
            </label>
          </div>
        </div>

        {/* Dashboard Cards  */}
        <div className="row">

        {/* Business Bank Account  */}
          <div className="col-lg-6 col-md-6 col-sm-12 mb-5 sm-mb-3">
            <div className="card">
              <div className=" p-3 d-flex justify-content-between">
                <h5 className="card-title">
                  <span className={styles.accountWatchlist}>Business Bank Account</span>
                </h5>
                <div>
                  <Chase />
                  <MoreVert />
                </div>
              </div>
              <hr className={styles.line}/>
              <div className="card-body">
                <div className="row">
                  <div className="col-lg4 col-md-4 col-sm-12">
                    <h4 className={styles.bankBalance}>3980.00</h4>
                    <small className={styles.substance}>Banlance in Substance</small>
                    <h4 className={styles.bankBalance}>4808.00</h4>
                    <small className={styles.substance}>Statement Banlance</small>
                    <div className={styles.reconcile}>Reconcile 23 items</div>
                  </div>
                  <div className="col-lg-8 col-md-8 col-sm-12">
                    <Charts />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Business Performance  */}
          <div className="col-lg-6 col-md-6 col-sm-12 mb-5 sm-mb-3">
            <div className="card">
              <div className=" p-3 d-flex justify-content-start">
                <h5 className="card-title">
                  <span className={styles.accountWatchlist}>Business Performance</span>
                </h5>
              </div>
              <hr className={styles.line}/>
              <div className="card-body">
                <div className="row">
                  <div className="col-lg-4 col-md-4 col-sm-12">
                    <h3 className={styles.performTitle}>1.72</h3>
                    <small className={styles.performRatio}>Current Ratio</small>
                    <h3 className={styles.performTitle}>8.9,9%</h3>
                    <small className={styles.performRatio}>Gross Profit %</small>
                  </div>
                  <div className="col-lg-8 col-md-8 col-sm-12">
                    <Charts />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Business Saving  Account  */}
          <div className="col-lg-6 col-md-6 col-sm-12  mb-5 sm-mb-3">
            <div className="card">
              <div className=" p-3 d-flex justify-content-between">
                <h5 className="card-title">
                  <span className={styles.accountWatchlist}>Business Saving Account</span>
                </h5>
                <div>
                  <AbBank />
                  <MoreVert />
                </div>
              </div>
              <hr className={styles.line}/>
              <div className="card-body">
                <div className="row">
                  <div className="col-lg-4 col-md-4 col-sm-12">
                    <h4 className={styles.bankBalance}>12,232.67</h4>
                    <small className={styles.substance}>Statement Balance</small>
                    <div className="align-items-end mt-5 pr-4">
                      <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8.50001 1.33333C4.82001 1.33333 1.83334 4.32 1.83334 8C1.83334 11.68 4.82001 14.6667 8.50001 14.6667C12.18 14.6667 15.1667 11.68 15.1667 8C15.1667 4.32 12.18 1.33333 8.50001 1.33333ZM7.16668 11.3333L3.83334 8L4.77334 7.06L7.16668 9.44666L12.2267 4.38666L13.1667 5.33333L7.16668 11.3333Z" fill="#20C9AC"/>
                      </svg>
                      <span className={styles.reconciled}>Reconciled</span>  
                    </div>                    
                  </div>
                  <div className="col-lg-8 col-md-8 col-sm-12">
                    <Charts />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Total cast in and out  */}
          <div className="col-lg-6 col-md-6 col-sm-12 mb-5 sm-mb-3">
            <div className="card">
              <div className=" p-3 d-flex justify-content-between">
                <h5 className="card-title">
                  <span className={styles.accountWatchlist}>Total cast in and out</span>
                </h5>
                <div>
                  <span className={styles.roundedDark}></span>
                  <span className={styles.CashIn}>
                    Cash in
                  </span>
                  <span className={styles.roundedLight}></span>
                  <span className={styles.CashIn}>
                    Cash out
                  </span>
                </div>
              </div>
              <hr className={styles.line}/>
              <div className="card-body">
                <div className="row">
                  <div className="col-lg-12 col-md-12 col-sm-12">
                    <Charts />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Invoice owed to you  */}
          <div className="col-lg-6 col-md-6 col-sm-12 mb-5 sm-mb-3">
            <div className="card">
              <div className=" p-3 d-flex justify-content-between">
                <h5 className="card-title">
                  <span className={styles.accountWatchlist}>Invoice owed to you</span>
                </h5>
                <div>
                  <span className={styles.salesInvoice}>New sales invoice</span>
                </div>
              </div>
              <hr className={styles.line}/>
              <div className="card-body">
                <div className="row">
                  <div className="col-lg-4 col-md-4 col-sm-6">
                    <h4 className={styles.tableAccount}>0.00</h4>
                    <small className={styles.invoiceSubTitle}>0 Draft bills</small>
                  </div>
                  <div className="col-lg-4 col-md-4 col-sm-6">
                    <h4 className={styles.tableAccount}>4,808.00</h4>
                    <small className={styles.invoiceSubTitle}>17 Awaiting payment</small>
                  </div>
                  <div className="col-lg-4 col-md-4 col-sm-6">
                    <h4 className={styles.tableAccount}>4808.00</h4>
                    <small className={styles.invoiceSubTitle}>4 Overdue</small>
                  </div>
                  <div className="col-lg-12 col-md-12 col-sm-12">
                    <Charts />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Account Watchlist  */}
          <div className="col-lg-6 col-md-6 col-sm-12 mb-5 sm-mb-3">
            <div className="card">
              <div className=" p-3 d-flex justify-content-start">
                <h5 className="card-title">
                  <span className={styles.accountWatchlist}>Account Watchlist</span>
                </h5>
              </div>
              <hr className={styles.line}/>
              <div className="card-body">
                <table className="table table-borderless">
                  <thead>
                    <tr>
                      <th scope="col" className={styles.tableHead}>Account</th>
                      <th scope="col" className={styles.tableHead}>This Month</th>
                      <th scope="col" className={styles.tableHead}>YTD</th>
                    </tr>
                  </thead>
                  <tbody>
                    {tableDatas.map(data => (
                      <tr key={data.id}>
                        <td className={styles.tableAccount}>{ data.account }</td>
                        <td className={styles.tableYtd}>{ Number(data.month).toLocaleString() }</td>
                        <td className={styles.tableYtd}>{ Number(data.ytd).toLocaleString() }</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
        {/* end */}

      </div>
    </div>
  )
}
