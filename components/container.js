export const Container = ({ children }) => (
  <div className="relative isolate py-32 px-6 pt-14 max-w-7xl mx-auto md:space-x-10">
    <div className="mx-auto max-w-7xl flex items-center justify-center flex-col md:flex-row">
      {children}
    </div>
  </div>
)
