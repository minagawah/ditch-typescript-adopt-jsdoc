import React from 'react';
import { useTranslation } from 'react-i18next';

export const About = () => {
  const { t } = useTranslation();

  return (
    <div
      id="container"
      tw="w-full box-border px-2 pt-8 pb-8 flex flex-col justify-start items-center"
    >
      <div id="content" tw="mt-2 md:mt-8 text-center font-semibold">
        <h1>{t('title.about')}</h1>
      </div>
    </div>
  );
};
