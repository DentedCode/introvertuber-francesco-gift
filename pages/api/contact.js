// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default (req, res) => {
  console.log(req.body)
  res.statusCode = 200
  res.json({
    status: 'success',
    message:
      'Thank you for sending me the email. For quick response, please reach me via social media!',
  })
}
