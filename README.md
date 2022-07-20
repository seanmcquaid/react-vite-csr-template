# React Template

My personal React Template I use for all new personal projects for React.

## To Set Up In AWS

1. Register a new domain (For example, "mcquaids-apps.com")
2. Opt to create a Route 53 Hosted Zone for this Endpoint
3. Create a ACM Certificate with DNS validation for that new domain following this pattern : \*.mcquaid-apps.com
4. Add the certificate CNAME entry in the ACM console to the associated public hosting zone
