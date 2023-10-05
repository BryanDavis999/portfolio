import Link from "next/link"

const NotFoundPage = () => (
  <div className='flex flex-col px-6 py-6 space-y-6 md:mt-24 md:flex-row md:justify-center md:space-x-6 md:space-y-0 text-gray-900 dark:text-gray-100'>
    <div className='h-42 flex items-center md:justify-center md:border-r-2'>
      <h1 className='text-8xl font-extrabold md:px-6'>
        404
      </h1>
    </div>
    <div className='max-w-md space-y-6'>
      <p className='text-xl font-bold md:text-2xl'>
        Hmm, this page seems to be missing.
      </p>
      <p>
        Please do contact me if you think there&apos;s been an error. <br />
        In the meantime, feel free to <Link href='/' className="text-blue-500 underline underline-offset-4">head back to the homepage.</Link>
      </p>
    </div>
  </div>
);

export default NotFoundPage