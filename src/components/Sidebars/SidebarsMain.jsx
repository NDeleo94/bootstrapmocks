import React from "react";

const SidebarsMain = () => {
  return (
    <main className="d-flex flex-nowrap">
      <h1 className="visually-hidden">Sidebars examples</h1>

      <div
        className="d-flex flex-column flex-shrink-0 p-3 text-bg-dark"
        style={{ width: "280px" }}
      >
        <a
          href="/"
          className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none"
        >
          <svg className="bi pe-none me-2" width="40" height="32">
            <use href="#bootstrap" />
          </svg>
          <span className="fs-4">Sidebar</span>
        </a>
        <hr />
        <ul className="nav nav-pills flex-column mb-auto">
          <li className="nav-item">
            <a href="#" className="nav-link active" aria-current="page">
              <svg className="bi pe-none me-2" width="16" height="16">
                <use href="#home" />
              </svg>
              Home
            </a>
          </li>
          <li>
            <a href="#" className="nav-link text-white">
              <svg className="bi pe-none me-2" width="16" height="16">
                <use href="#speedometer2" />
              </svg>
              Dashboard
            </a>
          </li>
          <li>
            <a href="#" className="nav-link text-white">
              <svg className="bi pe-none me-2" width="16" height="16">
                <use href="#table" />
              </svg>
              Orders
            </a>
          </li>
          <li>
            <a href="#" className="nav-link text-white">
              <svg className="bi pe-none me-2" width="16" height="16">
                <use href="#grid" />
              </svg>
              Products
            </a>
          </li>
          <li>
            <a href="#" className="nav-link text-white">
              <svg className="bi pe-none me-2" width="16" height="16">
                <use href="#people-circle" />
              </svg>
              Customers
            </a>
          </li>
        </ul>
        <hr />
        <div className="dropdown">
          <a
            href="#"
            className="d-flex align-items-center text-white text-decoration-none dropdown-toggle"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <img
              src="https://github.com/mdo.png"
              alt=""
              width="32"
              height="32"
              className="rounded-circle me-2"
            />
            <strong>mdo</strong>
          </a>
          <ul className="dropdown-menu dropdown-menu-dark text-small shadow">
            <li>
              <a className="dropdown-item" href="#">
                New project...
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Settings
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Profile
              </a>
            </li>
            <li>
              <hr className="dropdown-divider" />
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Sign out
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="b-example-divider b-example-vr"></div>

      <div
        className="d-flex flex-column flex-shrink-0 p-3 bg-light"
        style={{ width: "280px" }}
      >
        <a
          href="/"
          className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-dark text-decoration-none"
        >
          <svg className="bi pe-none me-2" width="40" height="32">
            <use href="#bootstrap" />
          </svg>
          <span className="fs-4">Sidebar</span>
        </a>
        <hr />
        <ul className="nav nav-pills flex-column mb-auto">
          <li className="nav-item">
            <a href="#" className="nav-link active" aria-current="page">
              <svg className="bi pe-none me-2" width="16" height="16">
                <use href="#home" />
              </svg>
              Home
            </a>
          </li>
          <li>
            <a href="#" className="nav-link link-dark">
              <svg className="bi pe-none me-2" width="16" height="16">
                <use href="#speedometer2" />
              </svg>
              Dashboard
            </a>
          </li>
          <li>
            <a href="#" className="nav-link link-dark">
              <svg className="bi pe-none me-2" width="16" height="16">
                <use href="#table" />
              </svg>
              Orders
            </a>
          </li>
          <li>
            <a href="#" className="nav-link link-dark">
              <svg className="bi pe-none me-2" width="16" height="16">
                <use href="#grid" />
              </svg>
              Products
            </a>
          </li>
          <li>
            <a href="#" className="nav-link link-dark">
              <svg className="bi pe-none me-2" width="16" height="16">
                <use href="#people-circle" />
              </svg>
              Customers
            </a>
          </li>
        </ul>
        <hr />
        <div className="dropdown">
          <a
            href="#"
            className="d-flex align-items-center link-dark text-decoration-none dropdown-toggle"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <img
              src="https://github.com/mdo.png"
              alt=""
              width="32"
              height="32"
              className="rounded-circle me-2"
            />
            <strong>mdo</strong>
          </a>
          <ul className="dropdown-menu text-small shadow">
            <li>
              <a className="dropdown-item" href="#">
                New project...
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Settings
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Profile
              </a>
            </li>
            <li>
              <hr className="dropdown-divider" />
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Sign out
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="b-example-divider b-example-vr"></div>

      <div
        className="d-flex flex-column flex-shrink-0 bg-light"
        style={{ width: "4.5rem" }}
      >
        <a
          href="/"
          className="d-block p-3 link-dark text-decoration-none"
          title="Icon-only"
          data-bs-toggle="tooltip"
          data-bs-placement="right"
        >
          <svg className="bi pe-none" width="40" height="32">
            <use href="#bootstrap" />
          </svg>
          <span className="visually-hidden">Icon-only</span>
        </a>
        <ul className="nav nav-pills nav-flush flex-column mb-auto text-center">
          <li className="nav-item">
            <a
              href="#"
              className="nav-link active py-3 border-bottom rounded-0"
              aria-current="page"
              title="Home"
              data-bs-toggle="tooltip"
              data-bs-placement="right"
            >
              <svg
                className="bi pe-none"
                width="24"
                height="24"
                role="img"
                aria-label="Home"
              >
                <use href="#home" />
              </svg>
            </a>
          </li>
          <li>
            <a
              href="#"
              className="nav-link py-3 border-bottom rounded-0"
              title="Dashboard"
              data-bs-toggle="tooltip"
              data-bs-placement="right"
            >
              <svg
                className="bi pe-none"
                width="24"
                height="24"
                role="img"
                aria-label="Dashboard"
              >
                <use href="#speedometer2" />
              </svg>
            </a>
          </li>
          <li>
            <a
              href="#"
              className="nav-link py-3 border-bottom rounded-0"
              title="Orders"
              data-bs-toggle="tooltip"
              data-bs-placement="right"
            >
              <svg
                className="bi pe-none"
                width="24"
                height="24"
                role="img"
                aria-label="Orders"
              >
                <use href="#table" />
              </svg>
            </a>
          </li>
          <li>
            <a
              href="#"
              className="nav-link py-3 border-bottom rounded-0"
              title="Products"
              data-bs-toggle="tooltip"
              data-bs-placement="right"
            >
              <svg
                className="bi pe-none"
                width="24"
                height="24"
                role="img"
                aria-label="Products"
              >
                <use href="#grid" />
              </svg>
            </a>
          </li>
          <li>
            <a
              href="#"
              className="nav-link py-3 border-bottom rounded-0"
              title="Customers"
              data-bs-toggle="tooltip"
              data-bs-placement="right"
            >
              <svg
                className="bi pe-none"
                width="24"
                height="24"
                role="img"
                aria-label="Customers"
              >
                <use href="#people-circle" />
              </svg>
            </a>
          </li>
        </ul>
        <div className="dropdown border-top">
          <a
            href="#"
            className="d-flex align-items-center justify-content-center p-3 link-dark text-decoration-none dropdown-toggle"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <img
              src="https://github.com/mdo.png"
              alt="mdo"
              width="24"
              height="24"
              className="rounded-circle"
            />
          </a>
          <ul className="dropdown-menu text-small shadow">
            <li>
              <a className="dropdown-item" href="#">
                New project...
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Settings
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Profile
              </a>
            </li>
            <li>
              <hr className="dropdown-divider" />
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Sign out
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="b-example-divider b-example-vr"></div>

      <div className="flex-shrink-0 p-3 bg-white" style={{ width: "280px" }}>
        <a
          href="/"
          className="d-flex align-items-center pb-3 mb-3 link-dark text-decoration-none border-bottom"
        >
          <svg className="bi pe-none me-2" width="30" height="24">
            <use href="#bootstrap" />
          </svg>
          <span className="fs-5 fw-semibold">Collapsible</span>
        </a>
        <ul className="list-unstyled ps-0">
          <li className="mb-1">
            <button
              className="btn btn-toggle d-inline-flex align-items-center rounded border-0 collapsed"
              data-bs-toggle="collapse"
              data-bs-target="#home-collapse"
              aria-expanded="true"
            >
              Home
            </button>
            <div className="collapse show" id="home-collapse">
              <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                <li>
                  <a
                    href="#"
                    className="link-dark d-inline-flex text-decoration-none rounded"
                  >
                    Overview
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="link-dark d-inline-flex text-decoration-none rounded"
                  >
                    Updates
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="link-dark d-inline-flex text-decoration-none rounded"
                  >
                    Reports
                  </a>
                </li>
              </ul>
            </div>
          </li>
          <li className="mb-1">
            <button
              className="btn btn-toggle d-inline-flex align-items-center rounded border-0 collapsed"
              data-bs-toggle="collapse"
              data-bs-target="#dashboard-collapse"
              aria-expanded="false"
            >
              Dashboard
            </button>
            <div className="collapse" id="dashboard-collapse">
              <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                <li>
                  <a
                    href="#"
                    className="link-dark d-inline-flex text-decoration-none rounded"
                  >
                    Overview
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="link-dark d-inline-flex text-decoration-none rounded"
                  >
                    Weekly
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="link-dark d-inline-flex text-decoration-none rounded"
                  >
                    Monthly
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="link-dark d-inline-flex text-decoration-none rounded"
                  >
                    Annually
                  </a>
                </li>
              </ul>
            </div>
          </li>
          <li className="mb-1">
            <button
              className="btn btn-toggle d-inline-flex align-items-center rounded border-0 collapsed"
              data-bs-toggle="collapse"
              data-bs-target="#orders-collapse"
              aria-expanded="false"
            >
              Orders
            </button>
            <div className="collapse" id="orders-collapse">
              <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                <li>
                  <a
                    href="#"
                    className="link-dark d-inline-flex text-decoration-none rounded"
                  >
                    New
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="link-dark d-inline-flex text-decoration-none rounded"
                  >
                    Processed
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="link-dark d-inline-flex text-decoration-none rounded"
                  >
                    Shipped
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="link-dark d-inline-flex text-decoration-none rounded"
                  >
                    Returned
                  </a>
                </li>
              </ul>
            </div>
          </li>
          <li className="border-top my-3"></li>
          <li className="mb-1">
            <button
              className="btn btn-toggle d-inline-flex align-items-center rounded border-0 collapsed"
              data-bs-toggle="collapse"
              data-bs-target="#account-collapse"
              aria-expanded="false"
            >
              Account
            </button>
            <div className="collapse" id="account-collapse">
              <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                <li>
                  <a
                    href="#"
                    className="link-dark d-inline-flex text-decoration-none rounded"
                  >
                    New...
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="link-dark d-inline-flex text-decoration-none rounded"
                  >
                    Profile
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="link-dark d-inline-flex text-decoration-none rounded"
                  >
                    Settings
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="link-dark d-inline-flex text-decoration-none rounded"
                  >
                    Sign out
                  </a>
                </li>
              </ul>
            </div>
          </li>
        </ul>
      </div>

      <div className="b-example-divider b-example-vr"></div>

      <div
        className="d-flex flex-column align-items-stretch flex-shrink-0 bg-white"
        style={{ width: "380px" }}
      >
        <a
          href="/"
          className="d-flex align-items-center flex-shrink-0 p-3 link-dark text-decoration-none border-bottom"
        >
          <svg className="bi pe-none me-2" width="30" height="24">
            <use href="#bootstrap" />
          </svg>
          <span className="fs-5 fw-semibold">List group</span>
        </a>
        <div className="list-group list-group-flush border-bottom scrollarea">
          <a
            href="#"
            className="list-group-item list-group-item-action active py-3 lh-sm"
            aria-current="true"
          >
            <div className="d-flex w-100 align-items-center justify-content-between">
              <strong className="mb-1">List group item heading</strong>
              <small>Wed</small>
            </div>
            <div className="col-10 mb-1 small">
              Some placeholder content in a paragraph below the heading and
              date.
            </div>
          </a>
          <a
            href="#"
            className="list-group-item list-group-item-action py-3 lh-sm"
          >
            <div className="d-flex w-100 align-items-center justify-content-between">
              <strong className="mb-1">List group item heading</strong>
              <small className="text-muted">Tues</small>
            </div>
            <div className="col-10 mb-1 small">
              Some placeholder content in a paragraph below the heading and
              date.
            </div>
          </a>
          <a
            href="#"
            className="list-group-item list-group-item-action py-3 lh-sm"
          >
            <div className="d-flex w-100 align-items-center justify-content-between">
              <strong className="mb-1">List group item heading</strong>
              <small className="text-muted">Mon</small>
            </div>
            <div className="col-10 mb-1 small">
              Some placeholder content in a paragraph below the heading and
              date.
            </div>
          </a>

          <a
            href="#"
            className="list-group-item list-group-item-action py-3 lh-sm"
            aria-current="true"
          >
            <div className="d-flex w-100 align-items-center justify-content-between">
              <strong className="mb-1">List group item heading</strong>
              <small className="text-muted">Wed</small>
            </div>
            <div className="col-10 mb-1 small">
              Some placeholder content in a paragraph below the heading and
              date.
            </div>
          </a>
          <a
            href="#"
            className="list-group-item list-group-item-action py-3 lh-sm"
          >
            <div className="d-flex w-100 align-items-center justify-content-between">
              <strong className="mb-1">List group item heading</strong>
              <small className="text-muted">Tues</small>
            </div>
            <div className="col-10 mb-1 small">
              Some placeholder content in a paragraph below the heading and
              date.
            </div>
          </a>
          <a
            href="#"
            className="list-group-item list-group-item-action py-3 lh-sm"
          >
            <div className="d-flex w-100 align-items-center justify-content-between">
              <strong className="mb-1">List group item heading</strong>
              <small className="text-muted">Mon</small>
            </div>
            <div className="col-10 mb-1 small">
              Some placeholder content in a paragraph below the heading and
              date.
            </div>
          </a>
          <a
            href="#"
            className="list-group-item list-group-item-action py-3 lh-sm"
            aria-current="true"
          >
            <div className="d-flex w-100 align-items-center justify-content-between">
              <strong className="mb-1">List group item heading</strong>
              <small className="text-muted">Wed</small>
            </div>
            <div className="col-10 mb-1 small">
              Some placeholder content in a paragraph below the heading and
              date.
            </div>
          </a>
          <a
            href="#"
            className="list-group-item list-group-item-action py-3 lh-sm"
          >
            <div className="d-flex w-100 align-items-center justify-content-between">
              <strong className="mb-1">List group item heading</strong>
              <small className="text-muted">Tues</small>
            </div>
            <div className="col-10 mb-1 small">
              Some placeholder content in a paragraph below the heading and
              date.
            </div>
          </a>
          <a
            href="#"
            className="list-group-item list-group-item-action py-3 lh-sm"
          >
            <div className="d-flex w-100 align-items-center justify-content-between">
              <strong className="mb-1">List group item heading</strong>
              <small className="text-muted">Mon</small>
            </div>
            <div className="col-10 mb-1 small">
              Some placeholder content in a paragraph below the heading and
              date.
            </div>
          </a>
          <a
            href="#"
            className="list-group-item list-group-item-action py-3 lh-sm"
            aria-current="true"
          >
            <div className="d-flex w-100 align-items-center justify-content-between">
              <strong className="mb-1">List group item heading</strong>
              <small className="text-muted">Wed</small>
            </div>
            <div className="col-10 mb-1 small">
              Some placeholder content in a paragraph below the heading and
              date.
            </div>
          </a>
          <a
            href="#"
            className="list-group-item list-group-item-action py-3 lh-sm"
          >
            <div className="d-flex w-100 align-items-center justify-content-between">
              <strong className="mb-1">List group item heading</strong>
              <small className="text-muted">Tues</small>
            </div>
            <div className="col-10 mb-1 small">
              Some placeholder content in a paragraph below the heading and
              date.
            </div>
          </a>
          <a
            href="#"
            className="list-group-item list-group-item-action py-3 lh-sm"
          >
            <div className="d-flex w-100 align-items-center justify-content-between">
              <strong className="mb-1">List group item heading</strong>
              <small className="text-muted">Mon</small>
            </div>
            <div className="col-10 mb-1 small">
              Some placeholder content in a paragraph below the heading and
              date.
            </div>
          </a>
        </div>
      </div>

      <div className="b-example-divider b-example-vr"></div>
    </main>
  );
};

export default SidebarsMain;
