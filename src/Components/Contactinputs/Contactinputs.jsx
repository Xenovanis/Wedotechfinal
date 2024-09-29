import React from 'react'
import { useState } from 'react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import { Field, Label, Switch } from '@headlessui/react'
import { useTranslation } from 'react-i18next'

export default function Contactinputs() {
  const [agreed, setAgreed] = useState(false)
  const { t } = useTranslation()

  return (
    <div className="px-6 py-24 sm:py-32 lg:px-8 mx-50 lg:mx-100">
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]"
      >
      </div>
      <div className="max-w-2xl">
        <h2 className="text-5xl font-bold tracking-tight text-gray-900 xl:mx-100 lg:mx-100 sm:text-4xl text-center xl:text-start lg:text-start">{t('get_in_touch')}</h2>
        <p className="mt-2 text-lg leading-8 text-gray-600 xl:mx-100 text-center lg:mx-100 xl:text-start lg:text-start">
          {t('contact_description')}
        </p>
      </div>
      <form action="#" method="POST" className="mt-16 max-w-4xl xl:mx-100 lg:mx-100 sm:mt-20">
        <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
          <div>
            <div className="mt-2.5">
              <input
                id="first-name"
                name="first-name"
                type="text"
                autoComplete="given-name"
                placeholder={t('first_name')}
                className="block w-full rounded-3xl border-0 px-7 py-5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 text-xl sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div>
            <div className="mt-2.5">
              <input
                id="last-name"
                name="last-name"
                type="text"
                placeholder={t('last_name')}
                autoComplete="family-name"
                className="block w-full rounded-3xl border-0 px-7 py-5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 text-xl sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div className="sm:col-span-2">
            <div className="mt-2.5">
              <input
                id="company"
                name="company"
                placeholder={t('company')}
                type="text"
                autoComplete="organization"
                className="block w-full rounded-3xl border-0 px-7 py-5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 text-xl sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div className="sm:col-span-2">
            <div className="mt-2.5">
              <input
                id="email"
                name="email"
                type="email"
                placeholder={t('email')}
                autoComplete="email"
                className="block w-full rounded-3xl border-0 px-7 py-5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 text-xl sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="phone-number" className="block font-semibold leading-6 text-md text-gray-400">
              {t('phone_number')}
            </label>
            <div className="relative mt-2.5">
              <div className="absolute inset-y-0 left-0 flex items-center">
                <label htmlFor="country" className="sr-only">
                  Country
                </label>
                <select
                  id="country"
                  name="country"
                  className="h-full rounded-3xl border-0 bg-transparent bg-none py-0 pl-4 pr-9 text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm"
                >
                  <option>US</option>
                  <option>CA</option>
                  <option>EU</option>
                </select>
                <ChevronDownIcon
                  aria-hidden="true"
                  className="pointer-events-none absolute right-3 top-0 h-full w-5 text-gray-400"
                />
              </div>
              <input
                id="phone-number"
                name="phone-number"
                type="tel"
                autoComplete="tel"
                className="block w-full rounded-3xl border-0 py-5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 text-xl sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div className="sm:col-span-2">
            <div className="mt-2.5">
              <textarea
                id="message"
                name="message"
                placeholder={t('your_message')}
                rows={4}
                className="block w-full rounded-3xl border-0 px-7 py-5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 text-xl sm:text-sm sm:leading-6"
                defaultValue={''}
              />
            </div>
          </div>
          <Field className="flex gap-x-4 sm:col-span-2">
            <div className="flex h-6 items-center">
              <Switch
                checked={agreed}
                onChange={setAgreed}
                className="group flex w-8 flex-none cursor-pointer rounded-3xl bg-gray-200 p-px ring-1 ring-inset ring-gray-900/5 transition-colors duration-200 ease-in-out focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black data-[checked]:bg-black"
              >
                <span className="sr-only">Agree to policies</span>
                <span
                  aria-hidden="true"
                  className="h-4 w-4 transform rounded-full bg-white shadow-sm ring-1 ring-gray-900/5 transition duration-200 ease-in-out group-data-[checked]:translate-x-3.5"
                />
              </Switch>
            </div>
            <Label className="text-sm leading-6 text-gray-600">
              {t('agree_policy')}{' '}
              <a href="#" className="font-semibold text-yellow-600">
                Wedotech
              </a>
              .
            </Label>
          </Field>
        </div>
        <div className="mt-10">
          <button
            type="submit"
            className="block w-md rounded-3xl bg-black px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            {t('find_out_more')}
          </button>
        </div>
      </form>
    </div>
  )
}