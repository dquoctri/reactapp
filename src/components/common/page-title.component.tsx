import React from "react"
import PropTypes from "prop-types"
import { Helmet } from "react-helmet-async"
import { useTranslation } from "react-i18next"
import { LocalizationKeys } from "../../assets/locales"

// define interface to represent component props
interface Props {
  title: string
}

const PageTitle = ({ title }: Props) => {
  const { t } = useTranslation()
  return (
    <Helmet defaultTitle={t(LocalizationKeys.title_key)}>
      <title>{title}</title>
    </Helmet>
  )
}

PageTitle.propTypes = {
  title: PropTypes.string.isRequired,
}

export default PageTitle
